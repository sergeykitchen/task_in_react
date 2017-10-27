import React from 'react';

export default (Component) => class Toggle extends React.Component {

		state = {
		isOpen: false
	}

	openWindow = () => {
		this.setState({
			isOpen: true
		})
	}

	closeWindow = () => {
		this.setState({
			isOpen: false
		})
	}

	render() {
		return <Component {...this.props} 
			openWindow={this.openWindow} 
			closeWindow={this.closeWindow} 
			isOpen={this.state.isOpen}
		/>
	}
}