var a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var b = [];

// it will push the element from 1st index
a.forEach(element => {
    b.push(element)
});

b.forEach(element => {
    console.log(element);
})
console.log("...........POP...............")
    // console.log("it will delete the last element last of the array")
b.pop();
for (let i = 0; i < b.length; i++) {
    console.log(b[i]);
}
console.log("............Splice..............")
    // this will add element in array in according to our  requierment
b.splice(2, 0, 14, 51, 29, 30)
for (let i = 0; i < b.length; i++) {
    console.log(b[i]);
}

console.log("............Splice.To.delete.............")
    // this will DELETE element in array in according to our  requierment

b.splice(2, 4)
for (let i = 0; i < b.length; i++) {
    console.log(b[i]);
}

console.log("............Slice..............")
    // this will DELETE element in array in according to our  requierment
var c = [] = b.slice(2, 6)
for (let i = 0; i < c.length; i++) {
    console.log(c[i]);
}

console.log("..............shift............")
    //  it will delete the first element of the array
b.shift();
for (let i = 0; i < b.length; i++) {
    console.log(b[i]);
}
console.log("..............Unshift............")
    // it will add the elements from 
b.unshift(15, 16, 17);
for (let i = 0; i < b.length; i++) {
    console.log(b[i]);
}