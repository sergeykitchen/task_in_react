import React, { Component } from 'react';
import { Table } from 'react-materialize';
import ToolPanel from './ToolPanel';
import ModalAdder from './ModalAdder';
import makeRequest from '../makeRequest';

class TableProjects extends Component{


  deleteProject = (id) => () => {
    makeRequest('DELETE', 'http://localhost:3000/projects/' + id)
      .then(() => this.props.reload())
  }

  editProject = (id, value) => () => {
    makeRequest('PATCH', 'http://localhost:3000/projects/' + id, value)
      .then(() => this.props.reload())
  }

  addProject = (value) => () => {
    alert(value)
  }


  render() {
    if(this.props.data === null) return <h1>loading...</h1>;
    
    const rowsArr = JSON.parse(this.props.data).map((project) => (
       <tr key={project.id}>         
          <td>{project.id}</td>
          <td>{project.name}</td>
          <td>
            <ToolPanel 
              project={project} 
              remove={this.deleteProject}
              edit={this.editProject}
            />
          </td>
      </tr>
    ))

    return (
      <Table className="projects">
        <thead>
         
          <tr>            
            <th data-field="id">id</th>
            <th data-field="name">name</th>
            <th data-field="add">
            <ModalAdder add={this.addProject}/>
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

