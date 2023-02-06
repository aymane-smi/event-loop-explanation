const input = process.argv[2];

const guessHandle = (resolve, reject)=>{
    if(input == 10)
        resolve("your guess is write");
    else
        reject("bad guess");
    setTimeout(()=>{
        console.log("-----END GAME-----");
    },1000);
};

console.log("-----GAME START------");

const startPromise = new Promise(guessHandle);


startPromise.then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err);
});