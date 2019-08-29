import React from 'react';
import DraggableColorBox from './DraggableColorBox';
import { SortableContainer } from 'react-sortable-hoc';
import { withStyles } from '@material-ui/styles';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const styles = {
	'@global': {
		'.fade-enter': {
			opacity: 0
		},
		'.fade-enter-active ': {
			opacity: 1,
			transition: 'opacity 0.5s ease-out'
		},
		'.fade-exit': {
			 transform:'scale(1)',
		},
		'.fade-exit-active': {
			transform:'scale(0)',
			transition: 'transform 0.5s ease-out'
		}
	}
};

const DraggableColorList = props => {
	const { colors, removeColor } = props;
	return (
		<TransitionGroup style={{ height: '100%' }}>
			{colors.map((color, i) => (
				<CSSTransition key={color.name} classNames='fade' timeout={500}>					
					<DraggableColorBox
						index={i}
						color={color.color}
						name={color.name}
						handleClick={() => removeColor(color.name)}
					/>
				</CSSTransition>
			))}
		</TransitionGroup>
	);
};

export default SortableContainer(withStyles(styles)(DraggableColorList));
