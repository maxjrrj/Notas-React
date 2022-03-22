import React, { Component } from "react";
import { Item } from "./styles.js"

class NoteList extends Component {
 
    render() {
        
        return (
            <>
                <Item>
                    {this.props.notas.map((nota,index) =>{
                        return(
                            <li key={index}>
                                <h3> {nota.titulo} </h3>
                                <span>{nota.texto}</span>
                            </li>
                        )
                        
                    })}
                </Item>
            </>
        );
    }
}

export default NoteList;