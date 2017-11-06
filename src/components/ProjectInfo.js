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
  }

  render() {

    makeRequest('GET', 'http://localhost:3000/projects'+ this.props.match.url)
      .then(
        text => {
          if(this.state.data === null)  
          this.setState({
            data: text
          })
          
        },
        error => { 
           
          if(!this.state.fail)        
            this.setState({
                fail: error.message
          }
        )
      }
    )

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
