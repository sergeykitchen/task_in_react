import React, { Component } from 'react';
import { Table } from 'react-materialize';
import ToolPanel from './ToolPanel';
import ModalAdder from './ModalAdder';
import makeRequest from '../makeRequest';
import ErrorMessage from '../components/ErrorMessage';

class Projects extends Component{

  state = {
    fail: false
  }

  deleteProject = (id) => () => {
    makeRequest('DELETE', 'http://localhost:3000/projects/' + id)
      .then(() => this.props.reload(),
        error => {
          this.setState({
              fail: error.message
            }
          )
        }
      )
  }

  editProject = (id, value) => () => {
    makeRequest('PATCH', 'http://localhost:3000/projects/' + id, value)
      .then(() => this.props.reload(),
        error => {
          this.setState({
              fail: error.message
            }
          )
        }
      )
  }

  addProject = (data) => () => {
    makeRequest('POST', 'http://localhost:3000/projects', data)
      .then(() => this.props.reload(),
        error => {
          this.setState({
              fail: error.message
            }
          )
        }
      )
  }


  render() {
    if(this.props.data === null) return <h1>loading...</h1>;
    let lastIndex = null;
    const rowsArr = JSON.parse(this.props.data).map((project) => {
     
      return (
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
      )
    })
    if(!this.state.fail) {

      return (
        <Table className="projects">
          <thead>
            <tr>            
              <th data-field="id">id</th>
              <th data-field="name">name</th>
              <th data-field="add">
              <ModalAdder add={this.addProject} lastIndex={lastIndex}/>
              </th>
            </tr>
          </thead>
          <tbody>
             {rowsArr}
          </tbody>
        </Table>
      )
    }
    return (
       <ErrorMessage error={this.state.fail} />
    )    
  }
};

export default Projects;

