import React, { Component } from 'react';
import Modal from 'react-modal';
import { Icon, Input} from 'react-materialize';
import toggleWindow from '../decorators/toggleWindow';

Modal.defaultStyles = {
  overlay : {
    position          : 'fixed',
    top               : 0,
    left              : 0,
    right             : 0,
    bottom            : 0,
    backgroundColor   : 'rgba(255, 255, 255, 0.75)',
    zIndex: 1000
  },
  content : {
    position                   : 'absolute',
    top                        : '40px',
    left                       : '40px',
    right                      : '40px',
    bottom                     : '40px',
    border                     : '1px solid #ccc',
    background                 : '#fff',
    overflow                   : 'auto',
    WebkitOverflowScrolling    : 'touch',
    borderRadius               : '4px',
    outline                    : 'none',
    padding                    : '20px'
  }
}
class ModalEdit extends Component {

	state = {
		value: null
	}
	
	handlerOnChange = (e, value) => {
		this.setState({
			value: value
		})
	}

	render() {
		
		const {openWindow, closeWindow, isOpen, id, name, edit} = {...this.props};
		return (
			<div className="inline">
				<span onClick={openWindow}>
	      	<Icon small>edit</Icon>
	    	</span>
		    	<Modal
		    		isOpen={isOpen}
		    		contantLabel="Edit project"
	    		 	onRequestClose={closeWindow}
					>
						<Input s={6}
							type="text"
							label="Change data" 
							validate 
							defaultValue={name} 
							onChange = {this.handlerOnChange}
						/>
				 		<button onClick={closeWindow}>cancel</button>
			  		<button onClick={edit(id, this.state.value)}>save</button>
			   	</Modal>
		  	</div>
		)
	}
}

export default toggleWindow(ModalEdit);

