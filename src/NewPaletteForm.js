import React, { useState } from 'react';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Button from '@material-ui/core/Button';
import DraggableColorList from './DraggableColorList';
import { arrayMove } from 'react-sortable-hoc';
import PaletteFormNav from './PaletteFormNav';
import ColorPickerForm from './ColorPickerForm';
import styles from './styles/NewPaletteFormStyles';
import seedsColors from './seedColors';

const NewPaletteForm = props => {
	const { classes, savePalette, palettes, maxColors } = props;
	const [open, setOpen] = useState(false);

	const [colors, setColors] = useState([]);

	function handleDrawerOpen() {
		setOpen(true);
	}

	function handleDrawerClose() {
		setOpen(false);
	}

	const addNewColor = newColor => {
		setColors([...colors, newColor]);
	};

	const handleSubmit = newPalette => {
		newPalette.id = newPalette.paletteName.toLowerCase().replace(/ /g, '-');
		newPalette.colors = colors;

		savePalette(newPalette);
		props.history.push('/');
	};
	const removeColor = colorName => {
		setColors(colors.filter(color => color.name !== colorName));
	};

	const onSortEnd = ({ oldIndex, newIndex }) => {
		setColors(arrayMove(colors, oldIndex, newIndex));
	};

	const clearColros = () => {
		setColors([]);
	};

	const addRandomColor = () => {
		const allColors = seedsColors.map(p => p.colors).flat();
		let rand;
		let randomColor;
		let isDuplicateColor = true;
		while (isDuplicateColor) {
			rand = Math.floor(Math.random() * allColors.length);
			randomColor = allColors[rand];
			isDuplicateColor = colors.some(
				color => color.name === randomColor.name
			);
		}
		setColors([...colors, randomColor]);
	};

	const paletteFull = colors.length >= maxColors;

	return (
		<div className={classes.root}>
			<PaletteFormNav
				open={open}
				palettes={palettes}
				handleSubmit={handleSubmit}
				handleDrawerOpen={handleDrawerOpen}
			/>
			<Drawer
				className={classes.drawer}
				variant='persistent'
				anchor='left'
				open={open}
				classes={{
					paper: classes.drawerPaper
				}}
			>
				<div className={classes.drawerHeader}>					
					<IconButton onClick={handleDrawerClose}  >						
						<ChevronLeftIcon className={classes.chevronIcon} />
					</IconButton>
				</div>
				<Divider />
				<div className={classes.container}>
					<div className={classes.buttons}>
						<Button
							variant='contained'
							className={classes.button}
							color='primary'
							onClick={addRandomColor}
							disabled={paletteFull}
						>
							Random Color
						</Button>
						<Button
							variant='contained'
							className={classes.button}
							color='secondary'
							onClick={clearColros}
						>
							Clear Palette
						</Button>
					</div>

					<ColorPickerForm
						paletteFull={paletteFull}
						addNewColor={addNewColor}
						colors={colors}
					/>
				</div>
			</Drawer>
			<main
				className={clsx(classes.content, {
					[classes.contentShift]: open
				})}
			>
				<div className={classes.drawerHeader} />

				{colors.length === 0 ? (
					<h1 className={classes.textForPaletteEmpty}>
						You can Add Color here{' '}
						<span role='img' aria-label='happy'>
							😊
						</span>
					</h1>
				) : (
					<DraggableColorList
						colors={colors}
						removeColor={removeColor}
						axis='xy'
						onSortEnd={onSortEnd}
						distance={20}
					/>
				)}
			</main>
		</div>
	);
};

NewPaletteForm.defaultProps = {
	maxColors: 20
};

export default withStyles(styles, { withTheme: true })(NewPaletteForm);
