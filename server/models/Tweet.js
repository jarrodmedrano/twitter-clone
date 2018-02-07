const mongoose = require('mongoose');
const { Schema } = mongoose;

const tweetSchema = new Schema({
  title: String,
  body: String,
  _user: { type: Schema.Types.ObjectId, ref: 'User' },
  dateSent: Date,
});

mongoose.model('tweets', tweetSchema);
