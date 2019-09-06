import React from 'react'
import evolve from '../evolve.json'
import Evolving from './Evolving'

export default function Evolve(val) {


    if (evolve.number.includes(val)) {
        return (
            <div>
                <button class="btn btn-warning btn-sm" onClick>Evolve</button>
            </div>
        )
    }
}
