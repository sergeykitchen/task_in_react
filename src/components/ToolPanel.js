import React, { Component } from 'react';
import { Icon, Col } from 'react-materialize';
import { Link } from 'react-router-dom';
import ModalRemoval from './ModalRemoval';
import ModalEditer from './ModalEditer';


export default class ToolPanel extends Component {

  render() {
    const {id, name} = this.props.project;
    
    return (
      <Col s={3}>
        <Link className="inline" to={'/' + id}><Icon small>visibility</Icon></Link>
        <ModalEditer id={id} name={name} edit={this.props.edit} />
        <ModalRemoval id={id} remove={this.props.remove}/>
      </Col>
    )
  }
}
