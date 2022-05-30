// it is must to write then and cath in case of promis
function sumOfthreeElement(...element) {
    return new Promise((resolve, reject) => {
        if (element.length > 3) {
            reject("only three elements are acceptable")
        } else {
            let sum = 0;
            let i = 0;
            while (i < element.length) {
                sum += element[i];
                i++;
            }
            resolve("sum is calulated " + sum)
        }
    })
}

console.log(sumOfthreeElement(1, 2, 3).then(result => {
    console.log(result)
}).catch(err => {
    console.log(err);
}))