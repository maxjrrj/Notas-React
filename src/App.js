import React from "react";
import NoteList from "./components/noteList";
import FormCadastro from "./components/formCadastro";

class App extends React.Component {

  constructor(){
    super()
    this.state = {
      notas: []
    }
  }
  criarNota(titulo, texto){
    const novaNota = {titulo, texto}
    const novoArrayNotas = [...this.state.notas,novaNota]
    const novoEstado = {
      notas: novoArrayNotas
    }
    this.setState(novoEstado)
  }

  render(){
    return (
      <section>
        <FormCadastro criarNota={this.criarNota.bind(this)}/>
        <hr/>
        <NoteList notas={this.state.notas}/>
      </section>
      
    );
  }
  
}

export default App;
