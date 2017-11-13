import React, {Component} from 'react';
import {Button, Input} from 'react-materialize';
import Modal from 'react-modal';
import toggleWindow from '../decorators/toggleWindow';
import ReactTooltip from 'react-tooltip';

class ModalAdder extends Component {
  state = {
    value: ''
  };

  handlerOnChange = (e, value) => {
    this.setState({
      value: value
    });
  };

  render() {
    const {openWindow, closeWindow, isOpen, add} = {...this.props};

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
        <Modal
          isOpen={isOpen}
          contentLabel="Add project"
          onRequestClose={closeWindow}
          className="modal adder"
        >
          <h3>Create new project</h3>
          <Input
            s={6}
            autoFocus
            autoComplete="off"
            type="text"
            label="Input the name"
            validate
            onChange={this.handlerOnChange}
          />
          <Button onClick={closeWindow}>cancel</Button>
          <Button className="right" onClick={add(this.state.value.trim())}>
            create
          </Button>
        </Modal>
      </div>
    );
  }
}

export default toggleWindow(ModalAdder);
