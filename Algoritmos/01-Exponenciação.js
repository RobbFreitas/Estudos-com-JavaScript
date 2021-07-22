function exponenciacao(base, expoente){
    const numBase = base;
    for (let index = 0; index < expoente-1; index++)
        base *= numBase;
    if (expoente === 0 && base != 0){
        return 1;
    }
    return base;
}

function main(){
    console.log("Exponenciação de 2^2: ", exponenciacao(2, 2));
}

main();