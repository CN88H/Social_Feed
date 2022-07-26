import React, { useState } from 'react';
import DisplayPosts from './Components/DisplayPosts/DisplayPosts';


function App() {

  const [entries, setEntries] = useState([{name: 'Chee', post: 'Hello World!'}, {name: 'Clay', post: 'Goodbye World!'}])

  return (
    <div>
      <h3>SocialFeed</h3>
      <DisplayPosts parentEntries={entries} />

    </div>
  );
}

export default App;
