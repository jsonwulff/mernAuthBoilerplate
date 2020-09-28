import React from 'react';

function NotFound({ location }) {
  return (
    <div>
      <h1>Page not found</h1>
      <p>
        No match for <code>{location.pathname}</code>
      </p>
    </div>
  );
}

export default NotFound;
