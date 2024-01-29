import logo from './logo.svg';
import './App.css';
import React from 'react';
import  {Component} from 'react';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      count:0
    }
  }
  handleCount(op){
    if(op==='inc'){
      this.setState({count:this.state.count+1});
    }else{
      this.setState({count:this.state.count-1})
    }
  }
  render(){
    return <div>
      <h1>Counter App</h1>
      <p>Count: {this.state.count}</p>
      <button onClick={()=>this.handleCount('inc')}>Increment</button>
      <button onClick={()=>this.handleCount('dec')}>Decrement</button>
    </div>
  }
}

export default App;
