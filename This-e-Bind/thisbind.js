function speakGeneric(){
    console.log(this.sound);
}

let dog = {

    sound: "Au au",
    speak: speakGeneric

}

let cat = {

    sound: "Miau",
    speak: speakGeneric

}

// dog.speak();
// cat.speak();

speakGeneric(); // Undefined porquê está sem contexto. O this se perde.

let bindedFunction = speakGeneric.bind(dog)

bindedFunction(); // Au au