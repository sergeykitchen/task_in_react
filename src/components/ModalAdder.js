import React, {Component} from 'react';
import {Button} from 'react-materialize';
import Modal from './Modal';
import ReactTooltip from 'react-tooltip';
import toggleWindow from '../decorators/toggleWindow';
import FormAdder from '../containers/FormAdder';

class ModalAdder extends Component {
  render() {
    const {openWindow, closeWindow, isOpen, add, id} = this.props;

    return (
      <div>
        <Button
          floating
          className="red"
          data-tip="add project"
          data-for="edit"
          waves="yellow"
          icon="add"
          onClick={openWindow}
        />
        <ReactTooltip id="edit" className="toolTheme" border delayShow={500} />
        <div>
          {isOpen && (
            <Modal>
              <div className="modal edit">
                <FormAdder
                  isOpen={isOpen}
                  closeWindow={closeWindow}
                  add={add}
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

export default toggleWindow(ModalAdder);
