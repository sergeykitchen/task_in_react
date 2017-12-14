import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import Projects from '../components/Projects';
import ProjectInfo from '../components/ProjectInfo';
import ErrorMessage from '../components/ErrorMessage';
import Header from '../components/Header';

class App extends React.Component {
  render() {
    const WrapperProjects = props => {
      return <Projects {...props} data={this.props.projects} />;
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
  const {projects} = state;

  return {
    projects: projects
  };
})(App);
