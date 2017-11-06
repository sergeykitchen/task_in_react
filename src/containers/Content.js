import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import makeRequest from '../makeRequest.js';
import Projects from '../components/Projects';
import ProjectInfo from '../components/ProjectInfo';
import ErrorMessage from '../components/ErrorMessage';


export default class Content extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      data: null,
      fail: false
    }

    this.loadData()
  }

  loadData = () => {
    makeRequest('GET', 'http://localhost:3000/projects')
      .then(
        text => {
          this.setState({
            data: text
          })
        },
        error => {          
          this.setState({
            fail: error.message
          })
        }
      )
  }

  render() {
    
    const WrapperProjects = props => {
      return (
        <Projects {...props} reload={this.loadData} data={this.state.data} />
      )
    }

    const WrapperProjectInfo = props => {
      return (
        <ProjectInfo {...props}  />
      )
    }

    if(!this.state.fail) {

      return (
        <Router>
          <div>
            <Route 
              exact path="/" 
              component={WrapperProjects} 
            />
            <Route path="/:id" component={WrapperProjectInfo}/>
          </div>
        </Router>
      )   
    } 

    return (
      <ErrorMessage error={this.state.fail} />
    )
  }
}

 
