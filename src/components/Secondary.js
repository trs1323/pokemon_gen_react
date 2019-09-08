import data from '../data.json'

export default function Secondary(val) {
    if (data[val].type[1] === undefined) {
        return ''
    }
    const info = Object.values(data[val].type[1])

    if (typeof (info) !== 'undefined') {
        return Object.values(data[val].type[1].toString())
    }
}
