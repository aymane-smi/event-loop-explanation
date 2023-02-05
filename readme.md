# explaining event loop and synchronization for dummies with code

## first scenario
first of all let's say that we don't our script to be blocked by func() and wait it to be executed then to execute the reset of the script. in this case we can use setTimeout to stop func for 400ms then executed(we guessed that func() gonna take about 400ms to be executed).

![timer explication](./assets/timer.png)

[code example here](timer.js)