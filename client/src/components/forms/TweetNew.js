import React, { Component } from 'react';
import DefaultForm from './DefaultForm';
import FormReview from './FormReview';
import { reduxForm } from 'redux-form';

class TweetNew extends Component {
  state = { formReview: false };

  renderContent() {
    if (this.state.showFormReview === true) {
      return (
        <FormReview onCancel={() => this.setState({ showFormReview: false })} />
      );
    }
    return (
      <DefaultForm
        onSurveySubmit={() => this.setState({ showFormReview: true })}
      />
    );
  }

  render() {
    return (
      <div>
        <h1>Post a new Tweet</h1>
        <p>Each Tweet costs 1 Credit</p>
        {this.renderContent()}
      </div>
    );
  }
}

export default reduxForm({
  form: 'DefaultForm',
})(TweetNew);
