import React, { useState } from 'react';
import DisplayPosts from './Components/DisplayPosts/DisplayPosts';
import CreatePost from './Components/CreatePost/CreatePost';


function App() {

  const [entries, setEntries] = useState([{name: 'Chee', post: 'Hello World!'}, {name: 'Clay', post: 'Goodbye World!'}])

  function addNewPost(entry){
    let tempPost = [entry, ...entries];

    setEntries(tempPost);
  }

  return (
    <div>
      <h3>SocialFeed</h3>
      <CreatePost addNewPostProp={addNewPost}/>
      <DisplayPosts parentEntries={entries} />

    </div>
  );
}

export default App;
