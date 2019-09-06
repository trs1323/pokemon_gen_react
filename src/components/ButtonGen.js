import React, { Component } from 'react'
import Generate from '../components/Generate';
import data from '../data.json';
import MinusOne from "./MinusOne"
import Secondary from './Secondary';
import Evolve from './Evolve'




export default class ButtonGen extends Component {
    state = {
        slot1: Generate(),
        slot2: Generate(),
        slot3: Generate(),
        slot4: Generate(),
        slot5: Generate(),
        slot6: Generate()
    };


    onClick = () => this.setState({
        slot1: Generate(),
        slot2: Generate(),
        slot3: Generate(),
        slot4: Generate(),
        slot5: Generate(),
        slot6: Generate()
    })

    render() {
        const { slot1, slot2, slot3, slot4, slot5, slot6 } = this.state

        return (
            <div className="container">
                <br />
                {/* Pictures row 1 */}
                <div className="row">
                    <div className="col">
                        <img src={require(`../img/${slot1}.png`)} alt="" />
                    </div>
                    <div className="col">
                        <img src={require(`../img/${slot2}.png`)} alt="" />
                    </div>
                    <div className="col">
                        <img src={require(`../img/${slot3}.png`)} alt="" />
                    </div>
                </div>
                {/* name row 1 */}
                <div className="row">
                    <div className="col"><span className="badge badge-dark">{Object.values(data[MinusOne(slot1)].name.english.toString())}</span></div>
                    <div className="col"><span className="badge badge-dark">{Object.values(data[MinusOne(slot2)].name.english.toString())}</span></div>
                    <div className="col"><span className="badge badge-dark">{Object.values(data[MinusOne(slot3)].name.english.toString())}</span></div>
                </div>
                {/* Types row 1 */}
                <div className="row">
                    <div className="col">
                        <span className="badge badge-primary">{Object.values(data[MinusOne(slot1)].type[0].toString())}</span> <span className="badge badge-secondary">{Secondary(slot1)}</span>
                    </div>
                    <div className="col">
                        <span className="badge badge-primary">{Object.values(data[MinusOne(slot2)].type[0].toString())}</span> <span className="badge badge-secondary">{Secondary(slot2)}</span>
                    </div>
                    <div className="col">
                        <span className="badge badge-primary">{Object.values(data[MinusOne(slot3)].type[0].toString())}</span> <span className="badge badge-secondary">{Secondary(slot3)}</span>
                    </div>
                </div>
                <div className="row">
                    <div className="col">{Evolve(slot1)}</div>
                    <div className="col">{Evolve(slot2)}</div>
                    <div className="col">{Evolve(slot3)}</div>
                </div>
                <br />
                {/* Picture row 2 */}
                <div className="row">
                    <div className="col">
                        <img src={require(`../img/${slot4}.png`)} alt="" />
                    </div>
                    <div className="col">
                        <img src={require(`../img/${slot5}.png`)} alt="" />
                    </div>
                    <div className="col">
                        <img src={require(`../img/${slot6}.png`)} alt="" />
                    </div>
                </div>
                {/* Name row 2 */}
                <div className="row">
                    <div className="col"><span className="badge badge-dark">{Object.values(data[MinusOne(slot4)].name.english.toString())}</span></div>
                    <div className="col"><span className="badge badge-dark">{Object.values(data[MinusOne(slot5)].name.english.toString())}</span></div>
                    <div className="col"><span className="badge badge-dark">{Object.values(data[MinusOne(slot6)].name.english.toString())}</span></div>
                </div>
                {/* Type row 2 */}
                <div className="row">
                    <div className="col">
                        <span className="badge badge-primary">{Object.values(data[MinusOne(slot4)].type[0].toString())}</span> <span className="badge badge-secondary">{Secondary(slot4)}</span>
                    </div>
                    <div className="col">
                        <span className="badge badge-primary">{Object.values(data[MinusOne(slot5)].type[0].toString())}</span> <span className="badge badge-secondary">{Secondary(slot5)}</span>
                    </div>
                    <div className="col">
                        <span className="badge badge-primary">{Object.values(data[MinusOne(slot6)].type[0].toString())}</span> <span className="badge badge-secondary">{Secondary(slot6)}</span>
                    </div>
                </div>
                <div className="row">
                    <div className="col">{Evolve(slot4)}</div>
                    <div className="col">{Evolve(slot5)}</div>
                    <div className="col">{Evolve(slot6)}</div>
                </div>
                <br />
                <div className="row">
                    <div className="col">
                        <button className="btn btn-lg btn-primary" onClick={this.onClick}>Generate Team</button>
                    </div>
                </div>
            </div>
        )
    }
}
