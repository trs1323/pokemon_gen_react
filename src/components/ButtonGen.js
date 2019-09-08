import React, { Component } from 'react'
import Generate from '../components/Generate';
import data from '../data.json';
import Secondary from './Secondary';

import evolve from '../evolve.json'




export default class ButtonGen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            slot1: 0,
            slot2: 0,
            slot3: 0,
            slot4: 0,
            slot5: 0,
            slot6: 0
        };
        this.onChange = this.onChange.bind(this)
        this.onClick = this.onClick.bind(this)
    }

    onClick = () => this.setState({
        slot1: Generate(),
        slot2: Generate(),
        slot3: Generate(),
        slot4: Generate(),
        slot5: Generate(),
        slot6: Generate()
    })

    onChange(e) {
        const key = e.target.name;
        const value = Number(e.target.value);
        this.setState({ [key]: value + 1 });
    }

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
                    <div className="col"><span className="badge badge-dark">{Object.values(data[slot1].name.english.toString())}</span></div>
                    <div className="col"><span className="badge badge-dark">{Object.values(data[slot2].name.english.toString())}</span></div>
                    <div className="col"><span className="badge badge-dark">{Object.values(data[slot3].name.english.toString())}</span></div>
                </div>
                {/* Types row 1 */}
                <div className="row">
                    <div className="col">
                        <span className="badge badge-primary">{Object.values(data[slot1].type[0].toString())}</span> <span className="badge badge-secondary">{Secondary(slot1)}</span>
                    </div>
                    <div className="col">
                        <span className="badge badge-primary">{Object.values(data[slot2].type[0].toString())}</span> <span className="badge badge-secondary">{Secondary(slot2)}</span>
                    </div>
                    <div className="col">
                        <span className="badge badge-primary">{Object.values(data[slot3].type[0].toString())}</span> <span className="badge badge-secondary">{Secondary(slot3)}</span>
                    </div>
                </div>
                {/* Button Row */}
                <div className="row">
                    <div className="col">
                        <button className={"btn btn-warning btn-sm" + (evolve.number.includes(slot1) ? '' : ' invisible')} name='slot1' value={slot1} onClick={this.onChange} >Evolve</button>
                    </div>
                    <div className="col">
                        <button className={"btn btn-warning btn-sm" + (evolve.number.includes(slot2) ? '' : ' invisible')} name='slot2' value={slot2} onClick={this.onChange} >Evolve</button>
                    </div>
                    <div className="col">
                        <button className={"btn btn-warning btn-sm" + (evolve.number.includes(slot3) ? '' : ' invisible')} name='slot3' value={slot3} onClick={this.onChange} >Evolve</button>
                    </div>
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
                    <div className="col"><span className="badge badge-dark">{Object.values(data[slot4].name.english.toString())}</span></div>
                    <div className="col"><span className="badge badge-dark">{Object.values(data[slot5].name.english.toString())}</span></div>
                    <div className="col"><span className="badge badge-dark">{Object.values(data[slot6].name.english.toString())}</span></div>
                </div>
                {/* Type row 2 */}
                <div className="row">
                    <div className="col">
                        <span className="badge badge-primary">{Object.values(data[slot4].type[0].toString())}</span> <span className="badge badge-secondary">{Secondary(slot4)}</span>
                    </div>
                    <div className="col">
                        <span className="badge badge-primary">{Object.values(data[slot5].type[0].toString())}</span> <span className="badge badge-secondary">{Secondary(slot5)}</span>
                    </div>
                    <div className="col">
                        <span className="badge badge-primary">{Object.values(data[slot6].type[0].toString())}</span> <span className="badge badge-secondary">{Secondary(slot6)}</span>
                    </div>
                </div>
                {/* Button Row */}
                <div className="row">
                    <div className="col">
                        <button className={"btn btn-warning btn-sm" + (evolve.number.includes(slot4) ? '' : ' invisible')} name='slot4' value={slot4} onClick={this.onChange} >Evolve</button>
                    </div>
                    <div className="col">
                        <button className={"btn btn-warning btn-sm" + (evolve.number.includes(slot5) ? '' : ' invisible')} name='slot5' value={slot5} onClick={this.onChange} >Evolve</button>
                    </div>
                    <div className="col">
                        <button className={"btn btn-warning btn-sm" + (evolve.number.includes(slot6) ? '' : ' invisible')} name='slot6' value={slot6} onClick={this.onChange} >Evolve</button>
                    </div>
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
