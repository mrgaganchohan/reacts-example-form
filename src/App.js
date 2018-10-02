import React, { Component } from 'react';
import './App.css';
import ExampleComponent from './components/ExampleComponent'
import Test from './components/Test';
import PostForm from './components/Postform';
class App extends Component {
  render() {
    return (
      <div className="App">
        
        {/* <Test/> */}
      {/* <ExampleComponent/> */}
       <PostForm/>
      </div>
    );
  }
}

export default App;
