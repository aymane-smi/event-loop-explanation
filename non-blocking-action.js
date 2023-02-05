import {readFile} from "fs";

const exec = readFile("readme.md", (err, data)=>{
    console.log(data);
});

console.log(exec);

console.log("request B");