// Methods are nothing more than properties that hold function values. This is a simple method:

let rabbit = {}
rabbit.speak = function(line){
    console.log(`The rabbit says '${line}'`)
}

rabbit.speak("I'm alive.")

// practice code for
function speak(line){
    console.log(`The ${this.type} rabbit says '${line}'`);
}
let whiteRabbit = {type: "white", speak};
let hungryRabbit = {type: "hungry", speak};

whiteRabbit.speak("Oh my ears and whiskers, " + "how late it's getting!");

let empty = {}
    console.log(empty.toString);
    console.log(empty.toString())

    console.log(Object.getPrototypeOf({}) ==
                Object.prototype)


    console.log(Object.getPrototypeOf(Object.prototype))

//  You can Object.create to create an object with a specific prototype

let protoRabbit = {
speak(line){
    console.log(`The ${this.type} rabbit says '${line}`)
}
}
let killerRabbit = Object.create(protoRabbit)
killerRabbit.type = "killer"
killerRabbit.speak("SKREEE!")

function makeRabbit(type){
    let rabbit = Object.create(protoRabbit);
    rabbit.type = type
    return rabbit
}

function Rabbit(type) {
    this.type = type;
  }
  Rabbit.prototype.speak = function(line) {
    console.log(`The ${this.type} rabbit says '${line}'`);
  };
  
  let weirdRabbit = new Rabbit("weird");

  console.log(Object.getPrototypeOf(Rabbit) ==
            Function.prototype);

  console.log(Object.getPrototypeOf(weirdRabbit) ==
            Rabbit.prototype);