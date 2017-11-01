import React, { Component } from 'react';
import Modal from 'react-modal';
import { Icon } from 'react-materialize';
import toggleWindow from '../decorators/toggleWindow'


class ModalRemoval extends Component{
	
	render() {
		
		const {openWindow, closeWindow, isOpen, remove, id} = {...this.props};

		return (
			<div className="inline">
				<span onClick={openWindow}>
	      	<Icon small>delete forever</Icon>
	    	</span>

				<Modal
	    		isOpen={isOpen}
	    		contantLabel="Delete project"
    		 	onRequestClose= {closeWindow}
				>
		  		<h1>Delete project?</h1>
		  		<button onClick={closeWindow}>cancel</button>
		  		<button onClick={remove(id)}>delete</button>
		  	</Modal>
	  	
	  	</div>
		)
	}
};

export default toggleWindow(ModalRemoval);