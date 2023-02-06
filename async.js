const input = process.argv[2];

const guessHandle = (resolve, reject)=>{
    if(input == 10)
        resolve("your guess is write");
    else
        reject("bad guess");
};

console.log("-----GAME START------");

const startPromise = new Promise(guessHandle);

try{
    let result = await startPromise;
    console.log(result);
    console.log("-----END GAME-----");
}catch(err){
    console.log(err);
}