import sizes from './sizes';

export default {
	root: {
		backgroundColor: 'white',
		border: '1px solid black',
		borderRadius: '5px',
		padding: '0.5rem',
		position: 'relative',
		overflow: 'hidden',
		cursor: 'pointer',
		'& svg': {
			[sizes.down('sm')]: {
				opacity: 1
			}
		},

		'&:hover  svg': {
			opacity: 1
		}
	},
	colors: {
		backgroundColor: '#eee',
		height: '120px',
		width: '100%',
		borderRadius: '5px',
		overflow: 'hidden'
	},
	title: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		margin: '0',
		color: 'black',
		paddingTop: '0.2rem',
		fonSize: '1rem',
		position: 'relative'
	},
	emoji: {
		marginLeft: '0.5rem',
		fontSize: '1.5rem'
	},
	miniColor: {
		height: '25.5%',
		width: '20%',
		display: 'inline-block',
		margin: '0 auto',
		position: 'relative',
		marginBottom: '-5px'
	},
	deleteIcon: {
		color: 'white',
		backgroundColor: '#eb3d30',
		width: '20px',
		height: '20px',
		position: 'absolute',
		top: '0',
		right: '0',
		padding: '5px',
		zIndex: 10,
		opacity: 0,
		transition: 'all 0.3s ease-in-out'
	}
};
