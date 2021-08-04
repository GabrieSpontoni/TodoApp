import React from "react"
import {Route, Redirect, HashRouter} from 'react-router-dom'


import Todo from '../todo/todo'
import About from '../about/about'

export default function routes() {
    return(
        <HashRouter>

            <Route path='/todos' component={Todo}></Route>
            <Route path='/about' component={About}></Route>
            <Redirect from= '*' to= '/todos'></Redirect>
                
        </HashRouter>
    );
}