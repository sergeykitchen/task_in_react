import React, { Component } from 'react';
import { Button, Input } from 'react-materialize';
import Modal from 'react-modal';
import toggleWindow from '../decorators/toggleWindow'
 

class ModalAdder extends Component {

	state = {
		value: null
	}

	handlerOnChange = (e, value) => {
		this.setState({
			value: value
		})
	}

	render() {

		const {openWindow, closeWindow, isOpen} = {...this.props}


		return (
			<div>
				<Button floating className='red'
					waves='yellow' 
					icon='add' 
					onClick={openWindow}
				/>
				<Modal
					isOpen={isOpen}
					contentLabel="Add project"
					onRequestClose={closeWindow}
				>
					<h1>Create new project?</h1>
					<Input s={6}
						type="text"
						label="Input the name"
						validate 
						onChange={this.handlerOnChange}
					/>
					<button onClick={closeWindow}>cancel</button>
					<button onClick={this.props.add(this.state.value)}>create</button>
				</Modal>
			</div>		
		)
	}
}	



export default toggleWindow(ModalAdder)