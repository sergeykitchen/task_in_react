import React, {Component} from 'react';
import Modal from 'react-modal';
import {Icon, Button} from 'react-materialize';
import toggleWindow from '../decorators/toggleWindow';
import ReactTooltip from 'react-tooltip';
import FormRemoval from '../containers/FormRemoval';

class ModalRemoval extends Component {
  render() {
    const {openWindow, closeWindow, isOpen, remove, id} = this.props;

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
        <div>
          {isOpen && (
            <Modal>
              <div className="modal delete">
                <FormRemoval
                  isOpen={isOpen}
                  closeWindow={closeWindow}
                  id={id}
                  remove={remove}
                />
              </div>
            </Modal>
          )}
        </div>
      </div>
    );
  }
}

export default toggleWindow(ModalRemoval);
