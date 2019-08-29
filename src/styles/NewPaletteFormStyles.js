import { DRAWER_WIDTH } from './../constants';
import sizes from './sizes';

const styles = theme => ({
	root: {
		display: 'flex'
	},

	hide: {
		display: 'none'
	},
	drawer: {
		width: DRAWER_WIDTH,
		flexShrink: 0,
	
	},
	drawerPaper: {
		width: DRAWER_WIDTH,
		display: 'flex',
		alignItems: 'center'
	},
	drawerHeader: {
		display: 'flex',
		width: '100%',
		alignItems: 'center',
		padding: theme.spacing(0, 1),
		...theme.mixins.toolbar,
		justifyContent: 'flex-end',	
		
	},
	content: {
		flexGrow: 1,
		padding: 0,
		height: 'calc(100vh - 64px)',
		transition: theme.transitions.create('margin', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen
		}),
		marginLeft: -DRAWER_WIDTH
	},
	contentShift: {
		transition: theme.transitions.create('margin', {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen
		}),
		marginLeft: 0
	},
	container: {
		width: '90%',
		height: '100%',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: '2rem',
	},
	buttons: {
		width: '100%'
	},
	button: {
		width: '100%',
		marginBottom: '0.5rem'
	},
	chevron: {
		border: '1px solid red'
	},
	chevronIcon: {
		fontSize: '2rem',
		zIndex: '20'
	},

	textForPaletteEmpty: {
		marginTop: '2rem',
		fontFamily: 'Lexend Deca',
		fontSize: '3rem',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		[sizes.down('md')]: {
			fontSize: '2rem'
		},

		[sizes.down('xs')]: {
			fontSize: '1rem'
		}
	}
});

export default styles;
