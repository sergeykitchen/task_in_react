import React, { Component } from 'react';
import Header from '../components/Header';
import TableProjects from '../components/TableProjects';
import ProjectInfo from '../components/ProjectInfo';
import { BrowserRouter as Router, Route } from 'react-router-dom';



export default class App extends Component {
  render() {

    return(
      <div>
        <Header />        
       	<Router>
          <div>
            <Route exact path="/" render={props => <TableProjects {...props} ebala="ebala" />}/>
            <Route path="/info" component={ProjectInfo} />
          </div>
        </Router>
      </div>
    )
  }
}
