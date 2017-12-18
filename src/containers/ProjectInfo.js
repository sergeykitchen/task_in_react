import React, {Component} from 'react';
import {connect} from 'react-redux';
import {loadProject} from '../actions';

class ProjectInfo extends Component {
  constructor(props) {
    super(props);
    this.props.loadProject(this.props.match.url);
  }

  render() {
    if (this.props.project === null) return <h3>Loading</h3>;
    return (
      <div className="info_project">
        <p>It is the project with name: {this.props.project.name}</p>
      </div>
    );
  }
}

export default connect(
  state => {
    const {oneProject} = state;

    return {
      project: oneProject
    };
  },
  {loadProject}
)(ProjectInfo);
