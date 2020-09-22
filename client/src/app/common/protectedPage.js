import React from 'react';

function protectedPage(props) {
  console.log(props);
  return <div>Protected page</div>;
}

export default protectedPage;
