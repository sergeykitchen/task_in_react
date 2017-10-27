import React, { Component } from 'react';
import { Icon, Row, Col, Button } from 'react-materialize';
import { Link } from 'react-router-dom';
import ModalRemoval from './ModalRemoval';
import ModalEdit from './ModalEdit';


export default class ToolPanel extends Component {

	render() {
		
		const {id, name} = this.props.project;
		
		return (
			<Col s={3}>
				
	      <Link className="inline" to="/info"><Icon small>visibility</Icon></Link>
     		<ModalEdit id={id} name={name} edit={this.props.edit} />
       	<ModalRemoval id={id} delete={this.props.delete}/>
      </Col>
		)
	}
	
}


{/**/}