const fs = require('fs');
console.log("at the top")
const data = fs.readFileSync('test.txt', 'utf-8')
console.log(data)
console.log("at the end")

// readfile is excute in a asyncronous manner and readFilesync is use to do operation in syncronour manner