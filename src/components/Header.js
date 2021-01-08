import React, { Component } from 'react';

class Header extends Component {
	render() {
		return (
			<div className="header">
				<div style={{ position: 'relative' }}>
					<h1
						style={{
						
							textAlign: 'center',
							color: 'white',
							margin: 'auto'
						}}
					>
						Find Where In The World
					</h1>
				</div>
			</div>
		);
	}
}

export default Header;
