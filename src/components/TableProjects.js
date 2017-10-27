import React, { Component } from 'react';
import { Table, Button, Row, Col, Icon } from 'react-materialize';
import ToolPanel from './ToolPanel';

class TableProjects extends Component{



  render() {
    if(this.props.data === null) return <h1>loading...</h1>;
    
    const rowsArr = JSON.parse(this.props.data).map((project) => (
       <tr key={project.id}>         
          <td>{project.id}</td>
          <td>{project.name}</td>
          <td ><ToolPanel project={project} delete={this.props.delete}/></td>
      </tr>
    ))

    return (
      <Table className="projects">
        <thead>
         
          <tr>            
            <th data-field="id">id</th>
            <th data-field="name">name</th>
            <th data-field="add">
              <Button floating className="red" waves="light" icon="add" />
            </th>
          </tr>
          
        </thead>
        <tbody>
           {rowsArr}
        </tbody>

      </Table>
    )
  }
};

export default TableProjects;

