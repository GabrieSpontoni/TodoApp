import React from 'react'
import PageHeader from '../template/pageHeader'

export default function about() {
    
    return (
        <div>
            <PageHeader name = 'Sobre' small = 'Nós'></PageHeader>

            <h2>Nossa História</h2>
            <p>Our history .....</p>
            <h2>Missão e Visão</h2>
            <p>Vision and mission ...</p>
            <h2>Contato</h2>
            <p>Contact ....</p>
        </div>
    )
}