import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { Picker } from 'emoji-mart';
import 'emoji-mart/css/emoji-mart.css';

const PaletteMetaForm = props => {
	const { palettes, handleSubmit, hideForm } = props;
	const [stage, setStage] = useState('form');
	const [newPaletteName, setNewPaletteName] = useState('');

	useEffect(
		() => {
			ValidatorForm.addValidationRule('isPaletteNameUnique', value =>
				palettes.every(
					({ paletteName }) =>
						paletteName.toLowerCase() !== value.toLowerCase()
				)
			);
		},
		 [palettes] 
	);

	const showEmojiPicker = () => {
		setStage('emoji');
	};

	const savePalette = emoji => {
		const newPalette = { paletteName: newPaletteName, emoji: emoji.native };
		handleSubmit(newPalette);
		setStage('')
	};
	return (
		<div>
			<Dialog open={stage === 'emoji'} onClose={hideForm}>
				<DialogTitle >
					choose a Palette emoji
				</DialogTitle>
				<Picker onSelect={savePalette} title='Pick a Palette Emoji' />
			</Dialog>
			<Dialog
				open={stage === 'form'}
				onClose={hideForm}
				
			>
				<DialogTitle>
					Choose a Palette Name
				</DialogTitle>
				<ValidatorForm onSubmit={showEmojiPicker}>
					<DialogContent>
						<DialogContentText>
							Please Enter a name for your new palette. Make sure
							it's unique
						</DialogContentText>

						<TextValidator
							label='Palette Name'
							value={newPaletteName}
							fullWidth
							margin='normal'
							onChange={e => setNewPaletteName(e.target.value)}
							validators={['required', 'isPaletteNameUnique']}
							errorMessages={[
								'Enter Palette Name',
								'Palette Name already used'
							]}
						/>
					</DialogContent>

					<DialogActions>
						<Button onClick={hideForm} color='primary'>
							Cancel
						</Button>
						<Button
							variant='contained'
							color='primary'
							type='submit'
						>
							save Palette
						</Button>
					</DialogActions>
				</ValidatorForm>
			</Dialog>
		</div>
	);
};

export default PaletteMetaForm;
