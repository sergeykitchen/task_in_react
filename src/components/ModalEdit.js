import React, { Component } from 'react';
import Modal from 'react-modal';
import { Icon, Row, Col, Input} from 'react-materialize';
import toggleWindow from '../decorators/toggleWindow';

class ModalEdit extends Component {

	state = {
		value: null
	}

	handlerOnChange = (e, value) => {

		e.preventDefault();
		this.setState({
			value: value
		})

	}

	render() {
		const {id, name } = this.props;

		
		return (
			<div className="inline">
				<span onClick={this.props.openWindow}>
	      	<Icon small>edit</Icon>
	    	</span>

	    	
		    	<Modal
		    		isOpen={this.props.isOpen}
		    		contantLabel="Edit project"
	    		 	onRequestClose= {this.props.closeWindow}
					>
						<form onSubmit={this.props.edit(this.state.value)}>
							<Row>
								
				  			<Input s={6}
				  				ref = {input => {this.textInput = input;}} 
				  				label="Change data" 
			  					validate 
			  					defaultValue={name} 
			  					onChange = {this.handlerOnChange}
		  					/>
			  			</Row>
				  		<button onClick={this.props.closeWindow}>cancel</button>
				  		<button type="submit">save</button>
			  		</form>

			  	</Modal>
		  	</div>
		)
	}
}


export default toggleWindow(ModalEdit);

