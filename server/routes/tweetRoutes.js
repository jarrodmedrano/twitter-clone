const _ = require('lodash');
const Path = require('path-parser');
const { URL } = require('url');
const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const requireCredits = require('../middlewares/requireCredits');

const Tweet = mongoose.model('tweets');

module.exports = app => {
  app.get('/api/tweets', requireLogin, async (req, res) => {
    try {
      const tweets = await Tweet.find({ _user: req.user.id });
      res.send(tweets);
    } catch (err) {
      res.status(422).send(err);
    }
  });

  app.post('/api/tweets', requireLogin, requireCredits, async (req, res) => {
    const { title, body } = req.body;

    const tweet = new Tweet({
      title,
      body,
      _user: req.user.id,
      dateSent: Date.now(),
    });

    try {
      await tweet.save();
      req.user.credits -= 1;
      const user = await req.user.save();
      res.send(user);
    } catch (err) {
      res.status(422).send(err);
    }
  });
};
