import React, {Component} from 'react';
import Modal from './Modal';
import {Icon, Input, Button} from 'react-materialize';
import toggleWindow from '../decorators/toggleWindow';
import ReactTooltip from 'react-tooltip';
import FormEditor from '../containers/FormEditor';

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
        <div>
          {isOpen && (
            <Modal>
              <div className="modal edit">
                <FormEditor
                  oldName={oldName}
                  isOpen={isOpen}
                  closeWindow={closeWindow}
                  edit={edit}
                  id={id}
                />
              </div>
            </Modal>
          )}
        </div>
      </div>
    );
  }
}

export default toggleWindow(ModalEdit);
