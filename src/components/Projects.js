import React, {Component} from 'react';
import {Table} from 'react-materialize';
import ToolPanel from './ToolPanel';
import ModalAdder from './ModalAdder';
import makeRequest from '../makeRequest';
import ErrorMessage from '../components/ErrorMessage';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {reloadData} from '../actions';

class Projects extends Component {
  state = {
    fail: false
  };

  deleteProject = id => () => {
    fetch(`http://localhost:3000/projects/${id}`, {method: 'DELETE'}).then(
      () => this.props.reloadData(),
      error => {
        this.setState({
          fail: error.message
        });
      }
    );
  };

  editProject = (id, value) => () => {
    if (!value) {
      this.props.reloadData();
      return;
    }

    fetch(`http://localhost:3000/projects/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
      },
      body: `name=${value}`
    }).then(
      () => {
        this.props.reloadData();
      },
      error => {
        this.setState({
          fail: error.message
        });
      }
    );
  };

  addProject = data => () => {
    if (!data) {
      this.props.reloadData();
      return;
    }
    fetch(`http://localhost:3000/projects`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
      },
      body: `name=${data}`
    }).then(
      () => {
        this.props.reloadData();
      },
      error => {
        this.setState({
          fail: error.message
        });
      }
    );
  };

  render() {
    if (this.props.data === null) return <h1>loading...</h1>;

    const rowsArr = this.props.data.map(project => {
      return (
        <tr key={project.id}>
          <td>{project.id}</td>
          <td>
            <Link className="inline" to={'/' + project.id}>
              {project.name}
            </Link>
          </td>
          <td>
            <ToolPanel
              project={project}
              remove={this.deleteProject}
              edit={this.editProject}
            />
          </td>
        </tr>
      );
    });
    if (!this.state.fail) {
      return (
        <Table className="projects">
          <thead>
            <tr>
              <th data-field="id">id</th>
              <th data-field="name">name</th>
              <th data-field="add">
                <ModalAdder add={this.addProject} />
              </th>
            </tr>
          </thead>
          <tbody>{rowsArr}</tbody>
        </Table>
      );
    }
    return <ErrorMessage error={this.state.fail} />;
  }
}

export default connect(null, {reloadData})(Projects);
