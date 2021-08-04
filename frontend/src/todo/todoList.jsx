import React from 'react'
import IconButton from './iconButton'
import '../template/custom.css'

export default function todoList(props){

    const renderRows = () => {
        const list = props.list || []
        return list.map(todo => (
            <tr key = {todo._id}>
                <td className = {todo.done ? 'markedAsDone' : ''}>  {todo.description}</td>
                <td>
                    <IconButton estilo = {'success'} icon = 'check' hide= {todo.done} onClick= {() => props.handleMarkAsDone(todo)}></IconButton>
                    <IconButton estilo = {'warning'} icon = 'undo' hide={!todo.done}  onClick = {() => props.handleMarkAsPending(todo)}></IconButton>
                    <IconButton estilo={'danger'} icon='trash-o' hide={!todo.done}  onClick={() => props.handleRemove(todo)} ></IconButton>
                </td>
            </tr>
        ))
    }
    return (
        <table className = 'table'>
            <thead>
                <tr>
                    <th>Descrição</th>
                    <th className = 'tableActions'>Ações</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}