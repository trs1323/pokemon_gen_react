import MinusOne from './MinusOne'
import data from '../data.json'

export default function Secondary(val) {
    if (data[MinusOne(val)].type[1] === undefined) {
        return ''
    }
    const info = Object.values(data[MinusOne(val)].type[1])

    if (typeof (info) !== 'undefined') {
        return Object.values(data[MinusOne(val)].type[1].toString())
    }
}
