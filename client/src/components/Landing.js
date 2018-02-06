import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Twitter Clone</h1>
      <Link to="/tweets/new" className="btn blue darken-2">
        Give a hoot, post a tweet
      </Link>
    </div>
  );
};

export default Landing;
