import React, {Component} from 'react';
import cronometro from './assets/cronometro.png';
import './style.css';

class App extends Component{
  constructor(props){
    super(props);
    this.state ={
      numero: 0,
      botao: "GO!"
    }
    this.timer = null;
    this.go = this.go.bind(this);
    this.stop = this.stop.bind(this);
  }

  go(){
    let state = this.state;
    if(this.timer !== null){
      clearInterval(this.timer);
      this.timer = null;
      state.botao = "GO!"
    }else{
      this.timer = setInterval(()=>{
        let state = this.state;
        state.numero += 1
        this.setState(state);
      }, 100);
      state.botao = "PAUSE";
    }
    this.setState(state);
  }

  stop(){
    if(this.timer !== null){
      clearInterval(this.timer);
      this.timer = null;
    }
    let state = this.state;
    state.numero = 0;
    state.botao = 'GO!';
    this.setState(state);
  }

  render(){
    return(
      <div className="container">
        <img src={cronometro} alt="cronometro" className="img"/>
        <a className="timer">{this.state.numero.toFixed(1)}</a>
        <div className="areaBotao">
          <a className="btn" onClick={this.go}>{this.state.botao}</a>
          <a className="btn" onClick={this.stop}>CLEAN</a>
   
        </div>
      </div>
    )
  }
}
export default App;