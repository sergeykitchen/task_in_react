import React, { Component } from 'react';
import makeRequest from '../makeRequest';
import ErrorMessage from './ErrorMessage';
export default class ProjectInfo extends Component {

  constructor(props) {

    super(props);

    this.state = {
      data: null,
      fail: false
    };
    this.loadProject();
    
  }

  

  loadProject = () => {
    makeRequest('GET', 'http://localhost:3000/projects'+ this.props.match.url)
      .then(
        text => {
          this.setState({
            data: text
          })
          
        },
        error => { 
            this.setState({
              fail: error.message
          }
        )
      }
    )

  }

  render() {
    if(this.state.data !== null) {

      const info = JSON.parse(this.state.data);
      
      return (
        <p>It is the project with name: {info.name}</p>
      )
    }
      
    return (
      <ErrorMessage error={this.state.fail} />
    )     
  }
}
