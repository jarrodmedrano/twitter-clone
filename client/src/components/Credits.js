import React, { Component } from 'react';
import Payments from './Payments';
import { connect } from 'react-redux';

class Credits extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return 'Still deciding';
      case false:
        return (
          <li>
            <a href="/auth/google">Login With Google</a>
          </li>
        );
      default:
        return (
          <div>
            You have {this.props.auth.credits} credits.
            <br />
            <Payments />
          </div>
        );
    }
  }
  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <h1>You need more Credits</h1>
        {this.renderContent()}
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Credits);
