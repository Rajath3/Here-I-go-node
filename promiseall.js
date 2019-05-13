// the order of exection may differ but the content remains same

var message = ""

promise1 = new Promise((resolve,reject) => {
    setTimeout(() => {
        message += "Hi"
        resolve(message)
    }, 2000);
})

promise2 = new Promise((resolve,reject) => {
    setTimeout(() => {
        message += " Namaste"
        resolve(message)
    }, 2000);
})

promise3 = new Promise((resolve,reject) => {
    setTimeout(() => {
        message += " Shubharatri"
        resolve(message)
    }, 2000);
})

var printPromise = (res) => {console.log("Result=",res, "message",message)}

Promise.all([promise1,promise2,promise3]).then(printPromise)
Promise.all([promise2,promise1,promise3]).then(printPromise)
Promise.all([promise3,promise2,promise1]).then(printPromise)