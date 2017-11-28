import React, {Component} from 'react';
import Modal from 'react-modal';
import {Icon, Button} from 'react-materialize';
import toggleWindow from '../decorators/toggleWindow';
import ReactTooltip from 'react-tooltip';

class ModalRemoval extends Component {
  render() {
    const {openWindow, closeWindow, isOpen, remove, id} = {...this.props};

    return (
      <div className="inline">
        <span onClick={openWindow} data-tip="delete project" data-for="delete">
          <Icon>remove</Icon>
        </span>
        <ReactTooltip
          id="delete"
          className="toolThemeDelete"
          border
          delayShow={500}
        />
        <Modal
          isOpen={isOpen}
          contantLabel="Delete project"
          onRequestClose={closeWindow}
          className="modal delete"
        >
          <h3>Delete project?</h3>
          <div className="tool">
            <Button onClick={closeWindow}>cancel</Button>
            <Button className="right" onClick={remove(id)}>
              delete
            </Button>
          </div>
        </Modal>
      </div>
    );
  }
}

export default toggleWindow(ModalRemoval);
