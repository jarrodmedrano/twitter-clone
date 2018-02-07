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
          <header>
            <Header />
          </header>
          <main>
            <div className="container">
              <Route exact path="/" component={Landing} />
              <Route exact path="/tweets" component={Dashboard} />
              <Route path="/tweets/new" component={SurveyNew} />
              <Route exact path="/credits" component={Credits} />
            </div>
          </main>
          <footer class="page-footer blue lighten-4">
            <div class="container">
              <div class="row">
                <div class="col l6 s12">
                  <h5 class="white-text">Thanks for stopping by</h5>
                </div>
              </div>
            </div>
            <div class="footer-copyright">
              <div class="container">
                This app was built with node & React.
                <a class="grey-text text-lighten-4 right" href="#!">
                  <a class="white-text" href="http://www.slashclick.com/">
                    My Website
                  </a>
                </a>
              </div>
            </div>
          </footer>
        </div>
      </BrowserRouter>
    );
  }
}

export default connect(null, actions)(App);
