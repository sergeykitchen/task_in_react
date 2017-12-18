import React, {Component} from 'react';
import {Table} from 'react-materialize';
import ToolPanel from '../components/ToolPanel';
import ModalAdder from '../components/ModalAdder';
import ErrorMessage from '../components/ErrorMessage';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {updateData} from '../actions';
import {SubmissionError} from 'redux-form';

class Projects extends Component {
  state = {
    fail: false
  };

  deleteProject = id => () => {
    return fetch(`http://localhost:3000/projects/${id}`, {
      method: 'DELETE'
    }).then(response => {
      if (response.status >= 400) {
        throw new SubmissionError({
          _error: 'project wasn`t deleted: network error'
        });
      } else {
        this.props.updateData();
      }
    });
  };

  editProject = (id, value, oldValue) => () => {
    if (!value || value === oldValue) {
      this.props.updateData();
      return;
    }

    return fetch(`http://localhost:3000/projects/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
      },
      body: `name=${value}`
    }).then(response => {
      if (response.status >= 400) {
        throw new SubmissionError({
          _error: 'project wasn`t edited: network error'
        });
      } else {
        this.props.updateData();
      }
    });
  };

  addProject = data => () => {
    if (!data) {
      this.props.updateData();
      return;
    }
    return fetch(`http://localhost:3000/projects`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
      },
      body: `name=${data}`
    }).then(response => {
      if (response.status >= 400) {
        throw new SubmissionError({
          _error: 'project wasn`t added: network error'
        });
      } else {
        this.props.updateData();
      }
    });
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

export default connect(null, {updateData})(Projects);
