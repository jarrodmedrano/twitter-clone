import React, { Component } from 'react';
import Payments from './Payments';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class TweetButton extends Component {
  renderContent() {
    if (this.props.auth.credits < 1) {
      return <Payments />;
    } else {
      return (
        <Link to="/tweets/new" className="btn blue darken-2">
          Give a hoot, post a tweet
        </Link>
      );
    }
  }

  render() {
    return (
      <div style={{ textAlign: 'center', marginBottom: '20px' }} key="0">
        {this.renderContent()}
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(TweetButton);
