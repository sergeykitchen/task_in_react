import React, {Component} from 'react';
import {reduxForm} from 'redux-form';
import {Button} from 'react-materialize';

class FormRemoval extends Component {
  render() {
    const {closeWindow, remove, handleSubmit, error, id} = this.props;

    return (
      <form onSubmit={handleSubmit(remove(id))}>
        <h3>Delete project?</h3>
        <input type="submit" autoFocus />
        <div className="tool">
          <Button type="button" onClick={closeWindow}>
            cancel
          </Button>
          <Button className="right" type="submit">
            delete
          </Button>
          {error && <div className="error del">{error}</div>}
        </div>
      </form>
    );
  }
}

FormRemoval = reduxForm({
  form: 'removal'
})(FormRemoval);

export default FormRemoval;
