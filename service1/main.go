// main.go
package main

import (
	"fmt"
	"net/http"
)

func mainHandler(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "Hello from Go service1!\n")
}

func main() {
	http.HandleFunc("/service1", mainHandler)
	http.ListenAndServe(":8080", nil)
}
