import React, { useState } from 'react';
import DisplayPosts from './Components/DisplayPosts/DisplayPosts';
import CreatePost from './Components/CreatePost/CreatePost';
import './App.css'


function App() {

  const [entries, setEntries] = useState([{name: 'Chee', post: 'Hello World!'}, {name: 'Clay', post: 'Goodbye World!'}])

  function addNewPost(entry){
    let tempPost = [entry, ...entries];

    setEntries(tempPost);
  }

  return (
    <div className='wholeApp'>

      <div className='header'>
        <h3 style={{margin: '1em'}}>Social
        <small className='text-muted'>Feed</small></h3>
      </div>


      <div className='container-fluid'>
        <div className='row'>
          <div className='col-md-6'>
            <div className='border-box'>
              <CreatePost addNewPostProp={addNewPost}/>
            </div>
          </div>
        </div>
        <div className='row1'>
          <div className='col-md-6'>
            <div className='border-box'>
              <DisplayPosts parentEntries={entries} />
            </div>
          </div>
        </div>
      </div>
      

    </div>
  );
}

export default App;
