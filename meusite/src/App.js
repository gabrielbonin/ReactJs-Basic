import React, {Component} from 'react';

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      form:{
        nome: "",
        email: "",
        idade: "",
        sexo: "",
        senha: "",
        error: ""
      }
      
    }
    this.confirmar = this.confirmar.bind(this);
    this.dadosForm = this.dadosForm.bind(this);
   
  }

  
  confirmar(event){
    const {nome, email, senha} = this.state;
    if(nome !== '' && email !== '' && senha !== ''){
      alert(`\nnome: ${this.state.form.nome} \nemail: ${this.state.form.email} \nsenha: ${this.state.form.senha} \nsexo: ${this.state.form.sexo} \nidade: ${this.state.form.idade}
      `)
    }else{
      this.setState({error: "Ops, falta algo"});
    }

    event.preventDefault();
  }

  dadosForm(e){
    let form = this.state.form;
    form[e.target.name] = e.target.value;
    this.setState({form: form});

  }

  render(){
    return(
      <div>
        <h1>Novo usuario</h1>
        {this.state.error && <p>{this.state.form.error}</p>}
        <form>
          <label>Nome: </label>
          <input type="text" name="nome" value={this.state.form.nome} 
          onChange={this.dadosForm}  placeholder="nome"></input> <br/>
          <label>Idade: </label>
          <input type="number" name="idade" value={this.state.form.idade} 
          onChange={this.dadosForm}  placeholder="Idade"></input> <br/>
          <label>Email: </label>
          <input type="text" name="email" value={this.state.form.email} 
          onChange={this.dadosForm} placeholder="email"></input> <br/>
          <label>Sexo:</label> 
          <select name="sexo" value={this.state.form.sexo} onChange={this.dadosForm}>
            <option>Selecione o sexo</option>
            <option value="Masculino">M</option>
            <option value="Feminino">F</option>
          </select><br/>
          <label>Senha: </label>  
          <input type="text" name="senha" value={this.state.form.senha} 
          onChange={this.dadosForm} placeholder="senha"></input> <br/>
          <button type="button" onClick={this.confirmar}>Confirmar</button>
        </form>
      </div>
    );
  }
}
export default App;
