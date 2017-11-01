import React, { Component } from 'react';
import Header from '../components/Header';
import Projects from '../components/Projects';
import ProjectInfo from '../components/ProjectInfo';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import makeRequest from '../makeRequest.js';



export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      data: null
    }

    this.loadData()
  }

  loadData = () => {
    makeRequest('GET', 'http://localhost:3000/projects')
      .then(text => {
        this.setState({
          data: text
        })
      })
  }

  render() {

    const WrapperProjects = (props) => {
      return (
        <Projects {...props} reload={this.loadData} data={this.state.data} />
      )
    }

    return(
      <div>
        <Header />        
       	<Router>
          <div>
            <Route 
              exact path="/" 
              component={WrapperProjects} 
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
