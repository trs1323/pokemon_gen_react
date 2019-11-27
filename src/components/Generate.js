

export default function Generate() {

    var arr1 = []

    for (let i = 0; i < 6; i++) {
        var cur = Math.floor(Math.random() * (151 - 1) + 1);
        if (arr1.includes(cur)) {
            cur = Math.floor(Math.random() * (151 - 1) + 1);
            arr1.push(cur)
        } else {
            arr1.push(cur)
        }

    }

    console.log(arr1)
    return arr1
}
