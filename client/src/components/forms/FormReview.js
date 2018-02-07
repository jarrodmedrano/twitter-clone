import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import formFields from './formFields';
import { withRouter } from 'react-router';
import * as actions from '../../actions';

const FormReview = ({ onCancel, formValues, submitTweet, history }) => {
  const reviewFields = _.map(formFields, ({ name, label }) => {
    return (
      <div key={name}>
        <label>{label}</label>
        <div>{formValues[name]}</div>
      </div>
    );
  });

  return (
    <div>
      <h5>Please confirm your entries</h5>
      {reviewFields}
      <button className="blue lighten-4 white-text btn-flat" onClick={onCancel}>
        Back
      </button>
      <button
        onClick={() => submitTweet(formValues, history)}
        className="blue darken-2 btn-flat right white-text"
      >
        Submit
        <i className="material-icons right">send</i>
      </button>
    </div>
  );
};

function mapStateToProps(state) {
  return { formValues: state.form.DefaultForm.values };
}

export default connect(mapStateToProps, actions)(withRouter(FormReview));
