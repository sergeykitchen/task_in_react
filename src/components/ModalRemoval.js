import React, { Component } from 'react';
import Modal from 'react-modal';
import { Icon } from 'react-materialize';
import toggleWindow from '../decorators/toggleWindow'


class ModalRemoval extends Component{
	
	render(){

		return (
			<div className="inline">
				<span onClick={this.props.openWindow}>
	      	<Icon small>delete forever</Icon>
	    	</span>

				<Modal
	    		isOpen={this.props.isOpen}
	    		contantLabel="Edit project"
    		 	onRequestClose= {this.props.closeWindow}
				>
		  		<h1>Delete project?</h1>
		  		<button onClick={this.props.closeWindow}>cancel</button>
		  		<button onClick={this.props.delete(this.props.id)}>delete</button>
		  	</Modal>
	  	
	  	</div>
		)
	}
};

export default toggleWindow(ModalRemoval);