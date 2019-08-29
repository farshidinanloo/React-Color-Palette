import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import PaletteFooter from './PaletteFooter';
import { withStyles } from '@material-ui/styles';
import styles from './styles/PaletteStyles'


const SingleColorPalette = props => {
	const { palette, colorId, classes } = props;

	const gatherShades = (palette, colorToFilterBy) => {
		let shades = [];
		let allColors = palette.colors;

		for (let key in allColors) {
			shades = shades.concat(
				allColors[key].filter(color => color.id === colorToFilterBy)
			);
		}
		return shades.slice(1);
	};

	const [shades] = useState(gatherShades(palette, colorId));
	const [format, setFormat] = useState('hex');

	const changeFormat = newFormat => {
		setFormat(newFormat);
	};

	const colorBoxes = shades.map(color => (
		<ColorBox
			key={color.name}
			name={color.name}
			color={color.hex}
			background={color[format]}
			showingFullPalette={false}
		/>
	));
	return (
		<div className={classes.Palette}>
			<Navbar changeFormat={changeFormat} showingAllColors={false} />
			<div className={classes.colors}>
				{colorBoxes}
				<div className={classes.goBack}>
					<Link to={`/palette/${palette.id}`}>Go Back</Link>
				</div>
			</div>
			<PaletteFooter
				paletteName={palette.paletteName}
				emoji={palette.emoji}
			/>
		</div>
	);
};

export default withStyles(styles)(SingleColorPalette);
