import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import makeRequest from '../makeRequest.js';
import Projects from '../components/Projects';
import ProjectInfo from '../components/ProjectInfo';
import ErrorMessage from '../components/ErrorMessage';
import Header from '../components/Header';

class App extends React.Component {
  render() {
    const WrapperProjects = props => {
      return (
        <Projects
          {...props}
          reload={this.loadData}
          data={this.props.projects}
        />
      );
    };

    // if (!this.state.fail) {
    return (
      <Router>
        <div>
          <Header />
          <Route exact path="/" component={WrapperProjects} />
          <Route path="/:id" component={ProjectInfo} />
        </div>
      </Router>
    );
    /* }
    return <ErrorMessage error={this.state.fail} />;*/
  }
}

export default connect(state => {
  return {
    projects: state.projects.projects
  };
})(App);
