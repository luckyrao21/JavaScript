var a = [
    { id: 1, name: "Rahul" },
    { id: 2, name: "ankit" },
    { id: 3, name: "parth" },
    { id: 4, name: "jitu" },
    { id: 5, name: "sahil" },
]


for (let index in a) {
    if (index % 2 == 0) {
        a[index].mobile = 6261536727
    }
    console.log(a[index]);
}

// for (let element of a) {
//     console.log(element)
// }