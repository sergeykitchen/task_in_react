import React, {Component} from 'react';
import {Col} from 'react-materialize';
import ModalRemoval from './ModalRemoval';
import ModalEditer from './ModalEditer';

export default class ToolPanel extends Component {
  render() {
    const {id, name} = this.props.project;

    return (
      <Col s={3} className="color">
        <ModalEditer id={id} name={name} edit={this.props.edit} />
        <ModalRemoval id={id} remove={this.props.remove} />
      </Col>
    );
  }
}
