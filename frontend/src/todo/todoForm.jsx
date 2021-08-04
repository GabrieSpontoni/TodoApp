import React from 'react'
import IconButton from './iconButton'

export default function todoForm(props){
    return (
        <div role = 'form' className = 'todoForm'>
            <div className = 'col-xs-12 col-sm-9 col-md-10' >
                <input id = 'description' className = 'form-control' placeholder = 'Adicione uma tarefa' onChange = {props.handleChange} value = {props.description}></input>

            </div>

            <div className = 'col-xs-12 col-sm-3 col-md-2' >
                <IconButton estilo = 'primary' icon = 'plus' onClick = {props.handleAdd} ></IconButton>
                <IconButton estilo = 'info' icon ='search' onClick = {props.handleSearch}></IconButton>
                <IconButton estilo = 'default' icon = 'close' onClick = {props.handleClear}></IconButton>

            </div>

        </div>
    )
}