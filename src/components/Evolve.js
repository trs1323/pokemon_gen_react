import React from 'react'
import evolve from '../evolve.json'
import Evolving from './Evolving'

export default function Evolve(val) {
    const sta = val

    if (evolve.number.includes(val)) {
        return (
            <div>
                <button className="btn btn-warning btn-sm" onClick={val + 1}>Evolve</button>
            </div>
        )
    } else {
        return (
            <div>
                <button className="btn btn-warning btn-sm invisible" onClick>Evolve</button>
            </div>
        )
    }
}
