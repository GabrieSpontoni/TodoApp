import React from 'react'

export default function iconButton (props) {
    if (props.hide){
        return null
    }else {
        return (
            <button className = {'btn btn-'+ props.estilo} onClick = {props.onClick}>
                    <i className = {'fa fa-'+props.icon}></i>
            </button>
        )
    }
}