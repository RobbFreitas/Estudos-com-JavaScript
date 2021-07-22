function fibonacci(n) {
    return n < 2 ? n : fibonacci(n - 1) + fibonacci(n - 2);
}

function main(){
    console.log("Fibonacci 7: ", fibonacci(7))
}

main()