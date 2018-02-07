import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Landing from './Landing';
import Credits from './Credits';
import Header from './Header';
import Dashboard from './Dashboard';
import SurveyNew from './forms/TweetNew';

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <div className="container">
            <Route exact path="/" component={Landing} />
            <Route exact path="/tweets" component={Dashboard} />
            <Route path="/tweets/new" component={SurveyNew} />
            <Route exact path="/credits" component={Credits} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default connect(null, actions)(App);
