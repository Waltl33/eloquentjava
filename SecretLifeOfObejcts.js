// Methods are nothing more than properties that hold function values. This is a simple method:

let rabbit = {}
rabbit.speak = function(line){
    console.log(`The rabbit says '${line}'`)
}

rabbit.speak("I'm alive.")
