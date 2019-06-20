const myFunc = (y) => {
    return new Promise(resolve=>{
        setTimeout(() => {
            resolve(y * 2)
        }, 2000);
    });
}

const callingFunc = async () => {
    let a = await myFunc(10)
    let b = await myFunc(20)
    let c = await myFunc(30)
    console.log(a+b+c)
}

callingFunc()