import React, {Component} from 'react';
import {Button} from 'react-materialize';
import Modal from 'react-modal';
import {initialize} from 'redux-form';
import ReactTooltip from 'react-tooltip';
import toggleWindow from '../decorators/toggleWindow';
import MyModal from '../components/MyModal';
import FormAdder from '../containers/FormAdder';

class ModalAdder extends Component {
  render() {
    const {openWindow, closeWindow, isOpen, add} = this.props;

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
        <MyModal extraClass="adder" {...this.props}>
          <FormAdder add={add} isOpen={isOpen} closeWindow={closeWindow} />
        </MyModal>
      </div>
    );
  }
}

export default toggleWindow(ModalAdder);
