import React, {Component} from 'react';
import {Field, reduxForm, formValueSelector} from 'redux-form';
import {Button} from 'react-materialize';
import {connect} from 'react-redux';

class FormAdder extends Component {
  render() {
    const {closeWindow, add, handleSubmit, error, name} = this.props;

    return (
      <form onSubmit={handleSubmit(add(name))}>
        <h3>Create new project</h3>

        <label>Enter Name</label>

        <Field
          type="text"
          name="projectName"
          component="input"
          autoFocus
          autoComplete="off"
        />

        <Button type="button" onClick={closeWindow}>
          cancel
        </Button>
        <Button type="submit" className="right">
          create
        </Button>
        {error && <div className="error">{error}</div>}
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
