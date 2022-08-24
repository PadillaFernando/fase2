async function foo(){
    // return Promise.resolve('Hello');
    return new Promise(resolve => {
        setTimeout(()=>resolve('helloi'),1000);
    })
}
// foo().then(value => console.log(value))

// async function bar(){
//     let result = await foo();

//     console.log(result)
// }

async function bar(){
    try{
        let result = await foo();
        console.log(result)
    } catch(err){
        console.log(err)
    }


}

bar()