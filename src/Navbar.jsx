import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import styles from './styles/NavbarStyles'

const Navbar = props => {
	const {
		level,
		changeLevel,
		changeFormat,
		showingAllColors,
		classes
	} = props;

	const [format, setFormat] = useState('hex');
	const [open, setOpen] = useState(false);

	const handleChangeFormat = e => {
		setFormat(e.target.value);
		changeFormat(e.target.value);
		setOpen(true);
	};

	const closeSnackbar = () => {
		setOpen(false);
	};

	return (
		<header className={classes.Navbar}>
			<div className={classes.logo}>
				<Link to='/'>React Color Picker</Link>
			</div>
			{showingAllColors && (
				<div>
					<span>Level: {level}</span>
					<div className={classes.slider}>
						<Slider
							defaultValue={level}
							min={100}
							max={900}
							step={100}
							onAfterChange={changeLevel}
						/>
					</div>
				</div>
			)}

			<div className={classes.selectContainer}>
				<Select value={format} onChange={handleChangeFormat}>
					<MenuItem value='hex'>HEX</MenuItem>
					<MenuItem value='rgb'>RGB</MenuItem>
					<MenuItem value='rgba'>RGBA</MenuItem>
				</Select>
			</div>
			<Snackbar
				anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
				open={open}
				autoHideDuration={3000}
				message={<span>Format Changed To {format.toUpperCase()}</span>}
				onClose={closeSnackbar}
				action={[
					<IconButton onClick={closeSnackbar} color='inherit'>
						<CloseIcon />
					</IconButton>
				]}
			/>
		</header>
	);
};

export default withStyles(styles)(Navbar);
