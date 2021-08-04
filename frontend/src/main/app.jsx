
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/font-awesome/css/font-awesome.min.css'

import React from 'react'
import Menu from '../template/menu'
import Routes from './routes'

export default function app () {
    return(
        <div className = 'container'>
            <Menu></Menu> 
            <Routes></Routes>
        </div>
    )
}