import React, { Component } from 'react'
import Generate from '../components/Generate';
import data from '../data.json';
import Secondary from './Secondary';

import evolve from '../evolve.json'




export default class ButtonGen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            generated: false, gen: '1'
        };
        this.onChange = this.onChange.bind(this)
        this.onClick = this.onClick.bind(this)
        this.isLoaded = this.isLoaded.bind(this)
    }

    onClick = () => this.setState({
        team: Generate(this.state.gen),
        generated: true

    })

    onChange(e) {
        var arr = this.state.team
        const place = Number(e.target.name);
        const value = Number(e.target.value);
        if (value === 133) {
            var eeveeNum = Math.floor(Math.random() * (4 - 1) + 1)
            var removed = arr.splice(place, 1, value + eeveeNum)
            this.setState({ team: arr });
        } else {
            var removed = arr.splice(place, 1, value + 1)
            this.setState({ team: arr });
        }

    }

    changeGen = (e) => this.setState({
        gen: e.currentTarget.id
    })


    typeColor(type) {
        if (type === "Grass") {
            return 'grass type'
        } else if (type === "Normal") {
            return 'normal type'
        } else if (type === "Fighting") {
            return 'type fighting'
        } else if (type === "Flying") {
            return 'type flying'
        } else if (type === "Poison") {
            return 'type poison'
        } else if (type === "Ground") {
            return 'type ground'
        } else if (type === "Rock") {
            return 'type rock'
        } else if (type === "Bug") {
            return 'type bug'
        } else if (type === "Ghost") {
            return 'type ghost'
        } else if (type === "Steel") {
            return 'type steel'
        } else if (type === "Fire") {
            return 'type fire'
        } else if (type === "Water") {
            return 'type water'
        } else if (type === "Electric") {
            return 'type electric'
        } else if (type === "Psychic") {
            return 'type psychic'
        } else if (type === "Ice") {
            return 'type ice'
        } else if (type === "Dragon") {
            return 'type dragon'
        } else if (type === "Dark") {
            return 'type dark'
        } else if (type === "Fairy") {
            return 'type fairy'
        }
    }

    isLoaded(slot) {
        return ((this.state.team === undefined) ? 0 : this.state.team[slot])
    }

    isActive(num) {
        return ((this.state.gen === num) ? "gen-btn active" : "gen-btn")
    }

    render() {
        const { team } = this.state

        return (
            <div className="container">
                <button className={this.isActive('0')} onClick={this.changeGen} id='0'>All<br /> Gens</button>
                <button className={this.isActive('1')} onClick={this.changeGen} id='1'>Kanto<br /> Gen 1</button>
                <button className={this.isActive('2')} onClick={this.changeGen} id='2'>Johto<br /> Gen 2</button>
                <button className={this.isActive('3')} onClick={this.changeGen} id='3'>Hoenn<br /> Gen 3</button>
                <button className={this.isActive('4')} onClick={this.changeGen} id='4'>Sinnoh<br /> Gen 4</button>
                <button className={this.isActive('5')} onClick={this.changeGen} id='5'>Unova<br /> Gen 5</button>
                <br />
                {/* Pictures row 1 */}
                <div className="row">
                    <div className="col">
                        <img src={require(`../img/${this.isLoaded(0)}.png`)} alt="" />
                        <div className="stats">
                            <p>Base Stats</p>
                            <p>Hp: {Object.values(data[this.isLoaded(0)].base.HP.toString())}</p>
                            <p>Attack: {Object.values(data[this.isLoaded(0)].base.Attack.toString())}</p>
                            <p>Defense: {Object.values(data[this.isLoaded(0)].base.Defense.toString())}</p>
                            <p>Sp. Attack: {Object.values(data[this.isLoaded(0)].base["Sp. Attack"].toString())}</p>
                            <p>Sp. Defense: {Object.values(data[this.isLoaded(0)].base["Sp. Defense"].toString())}</p>
                            <p>Speed: {Object.values(data[this.isLoaded(0)].base.Speed.toString())}</p>
                        </div>
                    </div>
                    <div className="col">
                        <img src={require(`../img/${this.isLoaded(1)}.png`)} alt="" />
                        <div className="stats">
                            <p>Base Stats</p>
                            <p>Hp: {Object.values(data[this.isLoaded(1)].base.HP.toString())}</p>
                            <p>Attack: {Object.values(data[this.isLoaded(1)].base.Attack.toString())}</p>
                            <p>Defense: {Object.values(data[this.isLoaded(1)].base.Defense.toString())}</p>
                            <p>Sp. Attack: {Object.values(data[this.isLoaded(1)].base["Sp. Attack"].toString())}</p>
                            <p>Sp. Defense: {Object.values(data[this.isLoaded(1)].base["Sp. Defense"].toString())}</p>
                            <p>Speed: {Object.values(data[this.isLoaded(1)].base.Speed.toString())}</p>
                        </div>
                    </div>
                    <div className="col">
                        <img src={require(`../img/${this.isLoaded(2)}.png`)} alt="" />
                        <div className="stats">
                            <p>Base Stats</p>
                            <p>Hp: {Object.values(data[this.isLoaded(2)].base.HP.toString())}</p>
                            <p>Attack: {Object.values(data[this.isLoaded(2)].base.Attack.toString())}</p>
                            <p>Defense: {Object.values(data[this.isLoaded(2)].base.Defense.toString())}</p>
                            <p>Sp. Attack: {Object.values(data[this.isLoaded(2)].base["Sp. Attack"].toString())}</p>
                            <p>Sp. Defense: {Object.values(data[this.isLoaded(2)].base["Sp. Defense"].toString())}</p>
                            <p>Speed: {Object.values(data[this.isLoaded(2)].base.Speed.toString())}</p>
                        </div>
                    </div>
                </div>
                {/* name row 1 */}
                <div className="row">
                    <div className="col">
                        <span className="badge badge-dark">{Object.values(data[this.isLoaded(0)].name.english.toString())}</span>
                    </div>
                    <div className="col">
                        <span className="badge badge-dark">{Object.values(data[this.isLoaded(1)].name.english.toString())}</span>
                    </div>
                    <div className="col">
                        <span className="badge badge-dark">{Object.values(data[this.isLoaded(2)].name.english.toString())}</span>
                    </div>
                </div>
                {/* Types row 1 */}
                <div className="row">
                    <div className="col">
                        <span className={this.typeColor(data[this.isLoaded(0)].type[0])} >{data[this.isLoaded(0)].type[0]}</span>
                        <span className={this.typeColor(Secondary(this.isLoaded(0)))} >{Secondary(this.isLoaded(0))}</span>
                    </div>
                    <div className="col">
                        <span className={this.typeColor(data[this.isLoaded(1)].type[0])} >{data[this.isLoaded(1)].type[0]}</span>
                        <span className={this.typeColor(Secondary(this.isLoaded(1)))} >{Secondary(this.isLoaded(1))}</span>
                    </div>
                    <div className="col">
                        <span className={this.typeColor(data[this.isLoaded(2)].type[0])} >{data[this.isLoaded(2)].type[0]}</span>
                        <span className={this.typeColor(Secondary(this.isLoaded(2)))} >{Secondary(this.isLoaded(2))}</span>
                    </div>
                </div>
                {/* Evolve Row */}
                <div className="row">
                    <div className="col">
                        <button className={"btn btn-warning btn-sm" + (evolve.number.includes(this.isLoaded(0)) ? '' : ' invisible')} name='0' value={this.isLoaded(0)} onClick={this.onChange} >Evolve</button>
                    </div>
                    <div className="col">
                        <button className={"btn btn-warning btn-sm" + (evolve.number.includes(this.isLoaded(1)) ? '' : ' invisible')} name='1' value={this.isLoaded(1)} onClick={this.onChange} >Evolve</button>
                    </div>
                    <div className="col">
                        <button className={"btn btn-warning btn-sm" + (evolve.number.includes(this.isLoaded(2)) ? '' : ' invisible')} name='2' value={this.isLoaded(2)} onClick={this.onChange} >Evolve</button>
                    </div>
                </div>
                <br />
                {/* Picture row 2 */}
                <div className="row">
                    <div className="col">
                        <img src={require(`../img/${this.isLoaded(3)}.png`)} alt="" />
                        <div className="stats">
                            <p>Base Stats</p>
                            <p>Hp: {Object.values(data[this.isLoaded(3)].base.HP.toString())}</p>
                            <p>Attack: {Object.values(data[this.isLoaded(3)].base.Attack.toString())}</p>
                            <p>Defense: {Object.values(data[this.isLoaded(3)].base.Defense.toString())}</p>
                            <p>Sp. Attack: {Object.values(data[this.isLoaded(3)].base["Sp. Attack"].toString())}</p>
                            <p>Sp. Defense: {Object.values(data[this.isLoaded(3)].base["Sp. Defense"].toString())}</p>
                            <p>Speed: {Object.values(data[this.isLoaded(3)].base.Speed.toString())}</p>
                        </div>
                    </div>
                    <div className="col">
                        <img src={require(`../img/${this.isLoaded(4)}.png`)} alt="" />
                        <div className="stats">
                            <p>Base Stats</p>
                            <p>Hp: {Object.values(data[this.isLoaded(4)].base.HP.toString())}</p>
                            <p>Attack: {Object.values(data[this.isLoaded(4)].base.Attack.toString())}</p>
                            <p>Defense: {Object.values(data[this.isLoaded(4)].base.Defense.toString())}</p>
                            <p>Sp. Attack: {Object.values(data[this.isLoaded(4)].base["Sp. Attack"].toString())}</p>
                            <p>Sp. Defense: {Object.values(data[this.isLoaded(4)].base["Sp. Defense"].toString())}</p>
                            <p>Speed: {Object.values(data[this.isLoaded(4)].base.Speed.toString())}</p>
                        </div>
                    </div>
                    <div className="col">
                        <img src={require(`../img/${this.isLoaded(5)}.png`)} alt="" />
                        <div className="stats">
                            <p>Base Stats</p>
                            <p>Hp: {Object.values(data[this.isLoaded(5)].base.HP.toString())}</p>
                            <p>Attack: {Object.values(data[this.isLoaded(5)].base.Attack.toString())}</p>
                            <p>Defense: {Object.values(data[this.isLoaded(5)].base.Defense.toString())}</p>
                            <p>Sp. Attack: {Object.values(data[this.isLoaded(5)].base["Sp. Attack"].toString())}</p>
                            <p>Sp. Defense: {Object.values(data[this.isLoaded(5)].base["Sp. Defense"].toString())}</p>
                            <p>Speed: {Object.values(data[this.isLoaded(5)].base.Speed.toString())}</p>
                        </div>
                    </div>
                </div>
                {/* Name row 2 */}
                <div className="row">
                    <div className="col"><span className="badge badge-dark">{Object.values(data[this.isLoaded(3)].name.english.toString())}</span></div>
                    <div className="col"><span className="badge badge-dark">{Object.values(data[this.isLoaded(4)].name.english.toString())}</span></div>
                    <div className="col"><span className="badge badge-dark">{Object.values(data[this.isLoaded(5)].name.english.toString())}</span></div>
                </div>
                {/* Type row 2 */}
                <div className="row">
                    <div className="col">
                        <span className={this.typeColor(data[this.isLoaded(3)].type[0])} >{data[this.isLoaded(3)].type[0]}</span>
                        <span className={this.typeColor(Secondary(this.isLoaded(3)))} >{Secondary(this.isLoaded(3))}</span>
                    </div>
                    <div className="col">
                        <span className={this.typeColor(data[this.isLoaded(4)].type[0])} >{data[this.isLoaded(4)].type[0]}</span>
                        <span className={this.typeColor(Secondary(this.isLoaded(4)))} >{Secondary(this.isLoaded(4))}</span>
                    </div>
                    <div className="col">
                        <span className={this.typeColor(data[this.isLoaded(5)].type[0])} >{data[this.isLoaded(5)].type[0]}</span>
                        <span className={this.typeColor(Secondary(this.isLoaded(5)))} >{Secondary(this.isLoaded(5))}</span>
                    </div>
                </div>
                {/* Evovle Row */}
                <div className="row">
                    <div className="col">
                        <button className={"btn btn-warning btn-sm" + (evolve.number.includes(this.isLoaded(3)) ? '' : ' invisible')} name='3' value={this.isLoaded(3)} onClick={this.onChange} >Evolve</button>
                    </div>
                    <div className="col">
                        <button className={"btn btn-warning btn-sm" + (evolve.number.includes(this.isLoaded(4)) ? '' : ' invisible')} name='4' value={this.isLoaded(4)} onClick={this.onChange} >Evolve</button>
                    </div>
                    <div className="col">
                        <button className={"btn btn-warning btn-sm" + (evolve.number.includes(this.isLoaded(5)) ? '' : ' invisible')} name='5' value={this.isLoaded(5)} onClick={this.onChange} >Evolve</button>
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
