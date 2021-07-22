function exponenciacaoRecursiva(base, expoente) {
    if (expoente <= 1) return base;

    return base * exponenciacaoRecursiva(base, expoente -1);
}

function main(){
    console.log("Exponenciação 2^3", exponenciacaoRecursiva(2, 3));
}

main()
