// Promise as a return type of a function
function m1(n) {
    return new Promise((resolve, reject) => {
        (n % 2 == 0) ? resolve(): reject()
    })
}

m1(11).then(result => {
    console.log("resolved")
}, err => {
    console.log("rejeted in err callback") // this is a flavor of then 
}).catch(err => {
    console.log("rejected");
})