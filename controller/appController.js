const express = require('express')

let helloWorld = (req,res) => res.send('Hello HelloWorld!!');
let printmsg = (req,res) => res.send('Print HelloWorld!!');

module.exports = {
    helloWorld: helloWorld,
    printmsg: printmsg
}