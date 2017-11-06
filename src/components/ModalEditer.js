import React, { Component } from 'react';
import Modal from 'react-modal';
import { Icon, Input} from 'react-materialize';
import toggleWindow from '../decorators/toggleWindow';

Modal.defaultStyles.overlay.zIndex = 1000;
  
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
              autoFocus
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

