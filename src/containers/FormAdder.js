import React, {Component} from 'react';
import {Field, reduxForm, formValueSelector} from 'redux-form';
import {Button, Input} from 'react-materialize';
import {connect} from 'react-redux';

class FormAdder extends Component {
  render() {
    return (
      <form onSubmit={this.props.handleSubmit(this.props.add(this.props.name))}>
        <h3>Create new project</h3>

        <label>Enter Name</label>

        <Field type="text" name="projectName" component="input" autoFocus />

        <Button type="button" onClick={this.props.closeWindow}>
          cancel
        </Button>
        <Button type="submit" className="right">
          create
        </Button>
        {this.props.error && <div className="error">{this.props.error}</div>}
      </form>
    );
  }
}

FormAdder = reduxForm({
  form: 'adder'
})(FormAdder);

const selector = formValueSelector('adder');

export default connect(state => {
  return {
    name: selector(state, 'projectName')
  };
})(FormAdder);
