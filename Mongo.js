var mango = require('mongoose');
mango.connect("mongodb+srv://lucky:1234@cluster1.bvxkm.mongodb.net/?retryWrites=true&w=majority").then(result => {
    console.log("connected");

}).catch(err => {
    console.log("not connected");
})