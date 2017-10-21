import React from 'react';
import getJSON from '../getJSON.js';

export default (Component) => class Request extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			data: null
		}

		this.loadData()
	}

	loadData = () => {
		getJSON('GET', 'http://localhost:3000/users')
			.then(text => {
				this.setState({
					data: text
				})
		})
	}
	render() {
				
		return (
			<Component {...this.props} data={this.state.data} />
		)
	}
}