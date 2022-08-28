import React, { useState } from 'react';
import { Form } from './components/Form.jsx';
import {Table} from './components/Table.jsx';


function App() {

  const [post, setPost] = useState([]);
  const [text, setText] = useState('');
  const [stack, setStack] = useState('');

  const AddPost = (e) => {
       e.preventDefault()
       
       const newPost = {
        id: Date.now(),
        text,
        stack
       }
       setPost([...post, newPost]);
       setText("");
       setStack("")
  }
  
  const removPost = (poste) => {
       setPost(post.filter(p => p.id !== poste.id))
  }

  
  return (
    <div className="app w-50 mx-auto my-3 shadow-lg p-5 mb-5 bg-body rounded">  
    <h2 className='text-muted text-center'>Create your first post</h2>
      <form>
       <Form type="text" placeholder="Programming Language" value={text} onChange={e => setText(e.target.value)} />  
       <Form type="text" placeholder="Enter your favourite stack" value={stack} onChange={e => setStack(e.target.value)} /> 
       <button type="button" onClick={AddPost} className="btn btn-outline-primary w-100 my-2">Add post</button> 
      </form>
      <Table remov ={removPost}   post={post}/>
    </div>
  );
}

export default App;
