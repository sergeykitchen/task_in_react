import React, { Component } from 'react';
import { Table, Button } from 'react-materialize';
import { Link } from 'react-router-dom';
import Request from '../wrappers/requestToServer'

class TableProjects extends Component{

  render() {
    console.log(JSON.parse(this.props.data))
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
           <tr>
            <th><Link to="/">tada</Link></th>
            <th><Link to="/info">ebala</Link></th>
            <th></th>
          </tr>
        </tbody>

      </Table>
    )
  }
}

export default Request(TableProjects)

