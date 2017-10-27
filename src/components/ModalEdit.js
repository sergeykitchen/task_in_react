import React, { Component } from 'react';
import Modal from 'react-modal';
import { Icon, Row, Col, Input} from 'react-materialize';
import toggleWindow from '../decorators/toggleWindow';

class ModalEdit extends Component {

	render() {
		const {id, name } = this.props;
		console.log(this.props)

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
					<Row>
		  			<Input s={6} label="Change data" validate defaultValue={name} />
	  			</Row>
		  		<button onClick={this.props.closeWindow}>cancel</button>
		  		<button onClick={()=>{}}>save</button>
		  	</Modal>
	  	</div>
		)
	}
}


export default toggleWindow(ModalEdit);

