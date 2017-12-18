import React, {Component} from 'react';
import Modal from 'react-modal';
import {Icon, Input, Button} from 'react-materialize';
import toggleWindow from '../decorators/toggleWindow';
import ReactTooltip from 'react-tooltip';
import FormEditor from '../containers/FormEditor';

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
    const {openWindow, closeWindow, isOpen, id, oldName, edit} = {
      ...this.props
    };
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
          <FormEditor
            oldName={oldName}
            isOpen={isOpen}
            closeWindow={closeWindow}
            edit={edit}
            id={id}
          />
        </Modal>
      </div>
    );
  }
}

export default toggleWindow(ModalEdit);
