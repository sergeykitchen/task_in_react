import React, {Component} from 'react';
import ModalRemoval from './ModalRemoval';
import ModalEditor from './ModalEditor';

export default class ToolPanel extends Component {
  render() {
    const {id, name} = this.props.project;

    return (
      <div className="color">
        <ModalEditor id={id} oldName={name} edit={this.props.edit} />
        <ModalRemoval id={id} remove={this.props.remove} />
      </div>
    );
  }
}
