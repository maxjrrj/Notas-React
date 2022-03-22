import React, { Component } from 'react';
import { Form } from './styles.js'
import Button from "../button";


class FormCadastro extends Component {

    constructor(props){
        super(props)
        this.titulo = ''
        this.nota = ''
    }

    _handleMudancaDeTitulo(event){
        event.stopPropagation()
        this.titulo = event.target.value
    }

    _handleMudancaDeTexto(event){
        event.stopPropagation()
        this.texto = event.target.value
    }

    _criarNota(event){
        event.preventDefault()
        event.stopPropagation()
        this.props.criarNota(this.titulo, this.texto)       
        
    }

    render() { 
        return (
            <Form
            onSubmit={this._criarNota.bind(this)}
            >
                <input 
                type="text" 
                placeholder="Título"
                onChange={this._handleMudancaDeTitulo.bind(this)}
                />
                <textarea 
                placeholder="Escreva sua nota:"
                onChange={this._handleMudancaDeTexto.bind(this)}
                />
                <Button/>
            </Form>
        );
    }
}
 
export default FormCadastro;
