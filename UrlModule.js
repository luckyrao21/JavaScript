// url module of node js is used to convert an web address into readable format
const url = require('url');

var p = url.parse("http://localhost:8080#/default.htm?year=2017&month=february", true);
console.log(p.hostname);
console.log(p.search);
var data = p.query;
console.log(data);
console.log(p.port);