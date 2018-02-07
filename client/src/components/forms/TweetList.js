import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTweets } from '../../actions';

class TweetList extends Component {
  componentDidMount() {
    this.props.fetchTweets();
  }

  renderTweets() {
    return this.props.tweets.reverse().map(tweet => {
      return (
        <div className="card darken-1" key={tweet._id}>
          <div className="card-content">
            <span className="card-title">{tweet.title}</span>
            <p>{tweet.body}</p>
            <p className="right">
              Sent On: {new Date(tweet.dateSent).toLocaleDateString()}
            </p>
          </div>
        </div>
      );
    });
  }

  render() {
    return <div>{this.renderTweets()}</div>;
  }
}

function mapStateToProps({ tweets }) {
  return { tweets };
}

export default connect(mapStateToProps, { fetchTweets })(TweetList);
