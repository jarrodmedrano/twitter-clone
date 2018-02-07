import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import TweetList from './forms/TweetList';
import TweetButton from './TweetButton';

class Landing extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return 'Still deciding';
      case false:
        return <a href="/auth/google">Login With Google</a>;
      default:
        return [<TweetButton key="0" />, <TweetList key="1" />];
    }
  }

  render() {
    return (
      <div>
        <h1 style={{ textAlign: 'center' }}>Tweeter</h1>
        {this.renderContent()}
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Landing);
