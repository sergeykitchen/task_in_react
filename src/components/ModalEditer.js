import React, {Component} from 'react';
import Modal from 'react-modal';
import {Icon, Input, Button} from 'react-materialize';
import toggleWindow from '../decorators/toggleWindow';
import ReactTooltip from 'react-tooltip';

Modal.defaultStyles.overlay.zIndex = 1000;

class ModalEdit extends Component {
  state = {
    value: ''
  };

  handlerOnChange = (e, value) => {
    this.setState({
      value: value
    });
  };

  render() {
    const {openWindow, closeWindow, isOpen, id, name, edit} = {...this.props};
    return (
      <div className="inline">
        <span data-tip="edit project" data-for="edit" onClick={openWindow}>
          <Icon>edit</Icon>
        </span>
        <ReactTooltip id="edit" className="toolTheme" border delayShow={500} />
        <Modal
          isOpen={isOpen}
          contantLabel="Edit project"
          onRequestClose={closeWindow}
          className="modal edit"
        >
          <h3>Edit project with id {id}</h3>
          <Input
            s={6}
            autoFocus
            type="text"
            label="Enter new data"
            validate
            defaultValue={name}
            onChange={this.handlerOnChange}
          />
          <Button onClick={closeWindow}>cancel</Button>
          <Button className="right" onClick={edit(id, this.state.value.trim())}>
            save
          </Button>
        </Modal>
      </div>
    );
  }
}

export default toggleWindow(ModalEdit);
