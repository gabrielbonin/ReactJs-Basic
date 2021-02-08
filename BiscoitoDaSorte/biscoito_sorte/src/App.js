import React, {Component} from 'react';
import   '../src/estilo.css';

import biscoito from './assets/biscoito.png';

class App extends Component{
  constructor(prop){
    super(prop);
    this.state ={
      textoFrase: ""
    };

    this.quebraBiscoito = this.quebraBiscoito.bind(this);

    this.frases = [
      'A vida trará coisas boas se tiveres paciência.',
      'Demonstre amor e alegria em todas as oportunidades e verás que a paz nasce dentro de você.',
      'Não compense na ira o que lhe falta na razão.',
      'Defeitos e virtudes são apenas dois lados da mesma moeda.',
      'A maior de todas as torres começa no solo.',
      'O bom-senso vai mais longe do que muito conhecimento.',
    ];
  }

  quebraBiscoito(){
    
    let state = this.state;
    let numeroAleatorio = Math.floor(Math.random() * this.frases.length);

    state.textoFrase = '"' + this.frases[numeroAleatorio] + '"';
    this.setState(state);
   
  }

  render(){
    return(
      <div className="container">
        <img src={biscoito} className="img" alt="biscoito"/>
        <Botao nome="abrir biscoito" btnAcao={this.quebraBiscoito}/>
        <h3 className="frase">{this.state.textoFrase}</h3>
      </div>
    )
  }
}

class Botao extends Component{
  render(){
    return(
      <div>
        <button onClick={this.props.btnAcao}>{this.props.nome}</button>
      </div>
    )
  }
}


export default App;