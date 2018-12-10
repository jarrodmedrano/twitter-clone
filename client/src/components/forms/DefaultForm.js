import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import validateEmails from '../../utils/validateEmails';
import formFields from './formFields';
import {View} from 'react-native';

const FormField = ({ input, label, meta: { error, touched } }) => {
    return (
        <View>
            <label>{label}</label>
            <input {...input} style={{ marginBottom: '5px' }} />
            <div className="error red-text" style={{ marginBottom: '5px' }}>
                {touched && error}
            </div>
        </View>
    );
};

class DefaultForm extends Component {
  renderFields() {
    return _.map(formFields, ({ label, name }) => {
      return (
        <Field
          key={name}
          component={FormField}
          type="text"
          label={label}
          name={name}
        />
      );
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
          {this.renderFields()}
          <Link to="/" className="blue lighten-4  btn-flat white-text">
            Cancel
          </Link>
          <button type="submit" className="blue darken-2 btn right white-text">
            Next
            <i className="material-icons right">done</i>
          </button>
        </form>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};

  errors.recipients = validateEmails(values.recipients || '');

  _.each(formFields, ({ name }) => {
    if (!values[name]) {
      errors[name] = 'You must provide a value';
    }
  });

  return errors;
}

export default reduxForm({
  validate,
  form: 'DefaultForm',
  destroyOnUnmount: false,
})(DefaultForm);
