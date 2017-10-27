import React, { Component } from 'react';
import Header from '../components/Header';
import TableProjects from '../components/TableProjects';
import ProjectInfo from '../components/ProjectInfo';
import makeRequest from '../makeRequest.js';
import { BrowserRouter as Router, Route } from 'react-router-dom';



export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      data: null
    }

    this.loadData()
  }

  loadData = () => {
    makeRequest('GET', 'http://localhost:3000/users')
      .then(text => {
        this.setState({
          data: text
        })
    })
  }

  deleteProject = (id) => () => {
    makeRequest('DELETE', 'http://localhost:3000/users/' + id)
      .then(() => this.loadData())
  }

  editProject = (id) => () => {

  }

  addProject = () => {
    
  }

  render() {

    return(
      <div>
        <Header />        
       	<Router>
          <div>
            <Route 
              exact path="/" 
              render={props => 
                <TableProjects 
                  {...props} data={this.state.data} 
                  delete={this.deleteProject}
                  edit={this.editProject}
                />
              }
            />
            <Route path="/info" 
              component={ProjectInfo} 
            />
          </div>
        </Router>
      </div>
    )
  }
}
