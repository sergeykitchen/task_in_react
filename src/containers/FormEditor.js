import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Field, reduxForm, formValueSelector} from 'redux-form';
import {Button} from 'react-materialize';

class FormEditor extends Component {
  render() {
    const {
      handleSubmit,
      id,
      name,
      closeWindow,
      edit,
      oldName,
      error
    } = this.props;
    return (
      <form onSubmit={handleSubmit(edit(id, name, oldName))}>
        <h3>Edit project with id {id}</h3>
        <label>Enter New Name</label>
        <Field
          type="text"
          component="input"
          name="name"
          autoFocus
          autoComplete="off"
        />
        <Button type="button" onClick={closeWindow}>
          cancel
        </Button>
        <Button type="submit" className="right">
          save
        </Button>
        {error && <div className="error">{error}</div>}
      </form>
    );
  }
}

FormEditor = reduxForm({
  form: 'editor'
})(FormEditor);

const selector = formValueSelector('editor');

export default connect((state, ownProps) => {
  return {
    name: selector(state, 'name'),
    initialValues: {name: ownProps.oldName}
  };
})(FormEditor);
