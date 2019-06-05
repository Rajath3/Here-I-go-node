// simple async await example
var dns = require('dns')
 var givemeyourweburl =  async function (url) {
    await dns.lookup(url,function(err,res) {
        if (err) {
            throw err
        } else {
            console.log(res)
        }
    })
}
// mapped google.com to some host in my local /etc/hosts
givemeyourweburl('google.com')

// async call with await function waits for its execution to complete
// while others are given an oppotunity to execute
var test = function() {
    console.log(1)
}

// async without await call returns a promise.
var test2 = async function() {
    await console.log(2)
}   

async function callingasync() {
    await test2()
    test()
}

function callingasync1() {
    test2()
    test()
}

// output is 2 "after async call" 2 1 1
callingasync()
console.log("after async call")
callingasync1()
