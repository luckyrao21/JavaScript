const fs = require('fs');
fs.appendFile('test.txt', " and you are good", (err => {
        console.log("success")
    }))
    // append will write content after the existing content and if file is not exist it will create a new file