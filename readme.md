# explaining event loop and synchronization for dummies with code

## first scenario

let's say that we don't our script to be blocked by func() and wait it to be executed then to execute the reset of the script. in this case we can use setTimeout to stop func for 400ms then execute it(we guessed that func() gonna take about 400ms to be executed).

![timer explication](./assets/timer.png)

[code example here](timer.js)

## second scenario

![non blocking using callbacks](./assets/non-blocking.png)

be default node.js came a rich api that support both asynchronous and synchronous functions.
let's play with file using "fs" module and try to read the readme of this repo
 - by using [readFileSync](blocking-action.js):
    we assure the reading to be synchronous so if there is a code after this call it should wait the `readFile` to be terminated
- by using [readFile](non-blocking-action.js):
    we should pass an callback `cb` to every asynchronous function in node to assure the execution.
    in our case node.js is not gonna wait readFile it will console.log after that it will show our result without respecting the order in the script