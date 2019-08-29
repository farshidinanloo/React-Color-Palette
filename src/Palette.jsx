import React, { useState } from 'react';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import PaletteFooter from './PaletteFooter';
import { withStyles } from '@material-ui/styles';
import styles from './styles/PaletteStyles'


const Palette = props => {
	const { colors, paletteName, emoji, id } = props.palette;
	const { classes } = props;

	const [level, setLevel] = useState(500);
	const [format, setFormat] = useState('hex');

	const changeLevel = newLevel => {
		setLevel(newLevel);
	};

	const changeFormat = newFormat => {
		setFormat(newFormat);
	};

	const colorBoxes = colors[level].map(color => (
		<ColorBox
			background={color[format]}
			name={color.name}
			key={color.id}
			moreUrl={`/palette/${id}/${color.id}`}
			showingFullPalette
		/>
	));
	return (
		<div className={classes.Palette}>
			<Navbar
				changeLevel={changeLevel}
				level={level}
				changeFormat={changeFormat}
				showingAllColors
			/>
			<div className={classes.colors}>{colorBoxes}</div>
			<PaletteFooter paletteName={paletteName} emoji={emoji} />
		</div>
	);
};

export default withStyles(styles)(Palette);
