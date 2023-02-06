package main

import (
	"fmt"
	"os"
	"strconv"
	"time"
)

func guess(n int) chan string {
	r := make(chan string)
	go func() {
		time.Sleep(2 * time.Second)
		if n == 10 {
			r <- "your guess is right"
		} else {
			r <- "bad guess"
		}
	}()
	return r
}

func main() {
	arg, _ := strconv.Atoi(os.Args[1])
	fmt.Println("-----GAME START------")
	fmt.Println(<-guess(arg))
	fmt.Println("-----GAME END------")

}
