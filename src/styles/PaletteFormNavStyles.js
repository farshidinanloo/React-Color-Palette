import { DRAWER_WIDTH } from './../constants';
import sizes from './sizes';

const styles = theme => ({
	root: {
		display: 'flex'
	},
	appBar: {
		transition: theme.transitions.create(['margin', 'width'], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen
		}),
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		height: '64px'
	},
	appBarShift: {
		width: `calc(100% - ${DRAWER_WIDTH}px)`,
		marginLeft: DRAWER_WIDTH,
		transition: theme.transitions.create(['margin', 'width'], {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen
		})
	},
	menuButton: {
		marginRight: theme.spacing(2)
	},
	navBtns: {
		marginRight: '1rem',
		'& a': {
			textDecoration: 'none'
		},
		[sizes.down('xs')]: {
			marginRight: '0.5rem'
		}
	},
	button: {
		margin: '0 0.5rem',
		[sizes.down('xs')]: {
			margin: '0 0.2rem',
			padding: '0.3rem'
		}
	},
	title: {
		[sizes.down('x2s')]: {
			display: 'none'
		}
	}
});

export default styles;
