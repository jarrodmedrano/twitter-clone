import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import TweetList from './forms/TweetList';

class Landing extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return 'Still deciding';
      case false:
        return <a href="/auth/google">Login With Google</a>;
      default:
        return [
          <Link to="/tweets/new" className="btn blue darken-2">
            Give a hoot, post a tweet
          </Link>,
          <TweetList />,
        ];
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
