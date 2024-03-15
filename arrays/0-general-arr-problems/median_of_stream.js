


function medianOfStream(arr) {
    for (let i = 0; i < arr.length; i++) {
        const temp = arr.slice(0, i + 1);
        let len = temp.length
        temp.sort((a, b) => a - b)
        let med;
        if (len % 2 == 0) {
            //even length
            med = Math.floor((temp[(len / 2) - 1] + temp[(len / 2)]) / 2)
            console.log(med)
        } else {
            //odd length
            med = temp[((len + 1) / 2) - 1]
            console.log(med)
        }
    }
}

// const arr = [5, 15, 1, 3] //op 5 10 5 4
// medianOfStream(arr)
