import {readFile} from "fs";
console.log("----BEGINNING OF THE SCRIPT-----");
let input = process.argv[0];

setTimeout(() => {
    console.log("timeout 2");
}, 30);

readFile("readme.md", (err, data)=>{
    console.log(data);
});

for(let i=0;i<5;i++){
    for(let j=0;j<5;j++){
        console.log(`calling ${input} using [${i}][${j}]`);
    }
        setTimeout(() => {
            console.log("timeout");
        }, 20);
}

console.log("----END OF THE SCRIPT-----");