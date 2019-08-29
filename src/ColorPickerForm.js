import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import { ChromePicker } from 'react-color';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { withStyles } from '@material-ui/core/styles';
import chroma from 'chroma-js';
import styles from './styles/ColorPickerFormStyles';

const ColorPickerForm = props => {
	const { paletteFull, addNewColor, colors, classes } = props;
	const [currentColor, setCurrentColor] = useState('purple');
	const [newColorName, setNewColorName] = useState('');

	useEffect(() => {
		ValidatorForm.addValidationRule('isColorNameUnique', value =>
			colors.every(
				({ name }) => name.toLowerCase() !== value.toLowerCase()
			)
		);
		ValidatorForm.addValidationRule('isColorUnique', value =>
			colors.every(({ color }) => color !== currentColor)
		);
	}, [colors, currentColor]);

	function updateCurrentColor(newColor) {
		setCurrentColor(newColor.hex);
	}
	const handleSubmit = () => {
		const newColor = {
			color: currentColor,
			name: newColorName
		};
		addNewColor(newColor);
		setNewColorName('');
	};

	return (
		<div>
			<ChromePicker
				color={currentColor}
				onChangeComplete={updateCurrentColor}
				className={classes.picker}
			/>
			<ValidatorForm onSubmit={handleSubmit} instantValidate={false}>
				<TextValidator
					className={classes.colorNameInput}
					value={newColorName}
					margin='normal'
					placeholder='Color Name'
					variant='filled'
					onChange={e => setNewColorName(e.target.value)}
					validators={[
						'required',
						'isColorNameUnique',
						'isColorUnique'
					]}
					errorMessages={[
						'Enter a color name',
						'Color name must be unique',
						'color already used'
					]}
				/>
				<Button
					variant='contained'
					color='primary'
					type='submit'
					className={classes.addColor}
					disabled={paletteFull}
					style={{
						backgroundColor: paletteFull ? '#ccc' : currentColor,
						color:
							chroma(currentColor).luminance() <= 0.5
								? '#eee'
								: '#333'
					}}
				>
					{paletteFull ? 'Platte Full' : 'Add Color'}
				</Button>
			</ValidatorForm>
		</div>
	);
};

export default withStyles(styles)(ColorPickerForm);
