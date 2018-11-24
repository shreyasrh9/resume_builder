import React, { Component } from 'react';
import ResumeHeader from './components/ResumeHeader/ResumeHeader'
import './App.css';

class App extends Component {

  componentWillMount(){
    console.log("Component is about to get mounted");
  }

  componentDidMount(){
    console.log("Component got mounted");
  }

  render() {
    console.log("Mounting component now");
    return (
      <div>
        <ResumeHeader />
      </div>
    );
  }
}

export default App;
