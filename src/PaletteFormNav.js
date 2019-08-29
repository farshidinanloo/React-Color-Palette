import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import PaletteMetaForm from './PaletteMetaForm';
import styles from './styles/PaletteFormNavStyles';

const PaletteFormNav = props => {
	const { classes, open, palettes, handleSubmit, handleDrawerOpen } = props;

	const [formShowing, setFormShowing] = useState(false);

	const showForm = () => {
		setFormShowing(true);
	};
	const hideForm = () => {
		setFormShowing(false);
	};

	return (
		<div className={classes.root}>
			<CssBaseline />
			<AppBar
				position='fixed'
				color='default'
				className={clsx(classes.appBar, {
					[classes.appBarShift]: open
				})}
			>
				<Toolbar>
					<IconButton
						color='inherit'
						onClick={handleDrawerOpen}
						edge='start'
						className={clsx(
							classes.menuButton,
							open && classes.hide
						)}
					>
						<MenuIcon />
					</IconButton>
					<Typography variant='h6' noWrap className={classes.title}>
						Design Your Palette
					</Typography>
				</Toolbar>
				<div className={classes.navBtns}>
					<Link to='/'>
						<Button
							variant='contained'
							className={classes.button}
							color='secondary'
						>
							Go Back
						</Button>
					</Link>
					<Button
						variant='contained'
						className={classes.button}
						color='primary'
						onClick={showForm}
					>
						Save
					</Button>
				</div>
			</AppBar>
			{formShowing && (
				<PaletteMetaForm
					palettes={palettes}
					handleSubmit={handleSubmit}
					hideForm={hideForm}
				/>
			)}
		</div>
	);
};

export default withStyles(styles, { withTheme: true })(PaletteFormNav);
