const http = require('http')
http.createServer((req, res) => {
    res.write("hello world")
    res.end(); // if we dont write end() then request will left hanging
}).listen(3000, () => {
    console.log("server is runing")
})