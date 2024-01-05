//TODO: Color Code: JavaScript Promises

//* Using a Promise
function getWeather(){
    return new Promise(function(resolve,reject){
        resolve('Sunny')
        // reject('Cloudy')
    })
}

function onSuccess(data){
    console.log("Basic use of Promise");
    console.log(`Success:${data}\n`);
}

function onFail(error){
    console.log("Basic use of Promise");
    console.log(`Error:${error}`);
}

getWeather().then(onSuccess,onFail);

//* Promise Chaining
function getWeather2(){
    return new Promise(function(resolve,reject){
        setTimeout(()=>{
            resolve('Rainyy')
        },100)
    })
}

function getWeatherEmoji(weather){
    return new Promise(function(resolve,reject){
        setTimeout(()=>{
            if(weather === "Sunny"){
                resolve("☀️")
            }else if(weather === "Rainy"){
                resolve("🌧")
            }else{
                reject("ERROR! NO ICON FOUND!\n")
            }
        },100)
    })
}

function onSuccess2(data){
    console.log("Promise Chaining");
    console.log(`Success:${data}`);
}

function onFail2(error){
    console.log("Promise Chaining");
    console.log(`Error:${error}`);
}

getWeather2()
// Whatever gets resolved in first Promise, in this case Weather2(), gets passed to next function if they're chained
.then(getWeatherEmoji)
.then(onSuccess2,onFail2);

//* Promise error handling
function fun1(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            reject('404');
        },100)
    })
}

function fun2(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve('200');
        },100)
    })
}

function onSuccess3(data){
    console.log('Promise error handling');
    console.log(`Success: ${data}\n`);
}

function onFail3(data){
    console.log('Promise error handling');
    console.log(`Error: ${data}\n`);
}

// When using catch, we omit the reject callback argument in first then() which will automatically execute to the chained catch method
// Better code flow adding a global catch instead of a second argument callback. 
// Using an error callback fn might produce unexpected behavior due to the fact that if there are more chained then, it will continue executing
fun1()
.then(onSuccess3)
.catch(onFail3);

//* Promise .finally()
// Runs if everything is either resolved or not
function fun3(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            reject('404');
        },100)
    })
}

function fun4(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve('200');
        },100)
    })
}

function onSuccess4(data){
    console.log('Promise finally');
    console.log(`Success: ${data}\n`);
}

function onFail4(data){
    console.log('Promise finally');
    console.log(`Error: ${data}\n`);
}

function onFinally(){
    console.log('WE DONE BOA');
}

fun3()
.then(fun4)
.then(onSuccess4)
.catch(onFail4)
.finally(onFinally)