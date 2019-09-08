

export default function Generate() {

    var current = Math.floor(Math.random() * (151 - 1) + 1)
    var lastnum = 200



    if (current === lastnum) {
        console.log('dupe')

        return Math.floor(Math.random() * (151 - 1) + 1)
    } else {

        return current
    }

}
