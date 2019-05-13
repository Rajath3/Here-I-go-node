// this is about simple promise creation with then

var request = require('request')

function getData(url) {
    var options = {
        url: url,
        headers: {
            'Users-Agent': 'request'
        }
    }
    return new Promise(function(resolve,reject) {
        request.get(options,function(err,res,body){
            if (err) {
                return reject(err)
            } else {
                return resolve(body)
            }
        })
    })
}

function main() {
    var profileUrl = "https://google.com"
    var promise1 = getData(profileUrl)
    promise1.then(function(res,err){
        if (err) {
            console.log(err)
        } else {
            console.log("here")
            console.log(res)
        }
    })
}

main()




