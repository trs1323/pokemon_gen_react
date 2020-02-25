

export default function Generate(gen) {
    if (gen === '0') {
        var arr1 = []

        for (let i = 0; i < 6; i++) {
            var cur = Math.floor(Math.random() * (649 - 1) + 1);
            if (arr1.includes(cur)) {
                cur = Math.floor(Math.random() * (649 - 1) + 1);
                arr1.push(cur)
            } else {
                arr1.push(cur)
            }

        }

        return arr1

    } else if (gen === '1') {
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

        return arr1

    } else if (gen === '2') {
        var arr1 = []

        for (let i = 0; i < 6; i++) {
            var cur = Math.floor(Math.random() * (251 - 152 + 1) + 152);
            if (arr1.includes(cur)) {
                cur = Math.floor(Math.random() * (251 - 152 + 1) + 152);
                arr1.push(cur)
            } else {
                arr1.push(cur)
            }

        }

        return arr1

    } else if (gen === '3') {
        var arr1 = []

        for (let i = 0; i < 6; i++) {
            var cur = Math.floor(Math.random() * (386 - 252 + 1) + 252);
            if (arr1.includes(cur)) {
                cur = Math.floor(Math.random() * (386 - 252 + 1) + 252);
                arr1.push(cur)
            } else {
                arr1.push(cur)
            }

        }

        return arr1

    } else if (gen === '4') {
        var arr1 = []

        for (let i = 0; i < 6; i++) {
            var cur = Math.floor(Math.random() * (493 - 387 + 1) + 387);
            if (arr1.includes(cur)) {
                cur = Math.floor(Math.random() * (493 - 387 + 1) + 387);
                arr1.push(cur)
            } else {
                arr1.push(cur)
            }

        }

        return arr1

    } else if (gen === '5') {
        var arr1 = []

        for (let i = 0; i < 6; i++) {
            var cur = Math.floor(Math.random() * (649 - 494 + 1) + 494);
            if (arr1.includes(cur)) {
                cur = Math.floor(Math.random() * (649 - 494 + 1) + 494);
                arr1.push(cur)
            } else {
                arr1.push(cur)
            }

        }

        return arr1

    }


}
