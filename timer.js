//in node the module "timer"
//is defined globaly so there is no need
//to be imported

console.log("request A");
const func = ()=>{
    console.log("request B");
};
setTimeout(func, 400);
console.log("request C");
