import React, { useState, useEffect } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';
import styles from './styles/ColorBoxStyles'


const ColorBox = props => {
	const { background, name, moreUrl, showingFullPalette, classes } = props;
	const [copied, setCopied] = useState(false);

	const changeCopyState = () => {
		setCopied(true);
	};

	useEffect(() => {
		setTimeout(() => {
			setCopied(false);
		}, 1500);
	},[copied]);

	return (
		<CopyToClipboard text={background} onCopy={changeCopyState}>
			<div className={classes.ColorBox} style={{ background }}>
				<div
					className={`${classes.copyOverlay} ${copied &&
						classes.showOverlay}`}
					style={{ background }}
				/>
				<div
					className={`${classes.copyMessage} ${copied &&
						classes.showMessage}`}
				>
					<h1 >copied!</h1>
					<p >{background}</p>
				</div>
				<div className='copy-container'>
					<div className={classes.boxContent}>
						<span>{name}</span>
					</div>
					<button className={classes.copyButton}>Copy</button>
				</div>
				{showingFullPalette && (
					<Link to={moreUrl} onClick={e => e.stopPropagation()}>
						<span className={classes.seeMore}>More</span>
					</Link>
				)}
			</div>
		</CopyToClipboard>
	);
};

export default withStyles(styles)(ColorBox);
