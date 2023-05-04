let day1 = {
    squirrel: false,
    events: ["work", "touched tree", "pizza", "running"]
}

day1.wolf = false
console.log(day1.squirrel)

let descriptions = {
    work: "Went to work", "touched tree": "Touched a tree"

}

console.log (descriptions.work)

// Computing correlation

function phi(table){
    return (table[3]*table[0]- table[2] * table[1])/
        Math.sqrt((table[2] + table[3])*
                  (table[0] + table[1])*
                  (table[1] + table[3])*
                  (table[0] + table[2]));
}


// To extract a two-by-two table for a specific event from the journal, 
// we must loop over all the entries and tally how many times the event
//  occurs in relation to squirrel transformations.
let journal = []

function addEntry(events, squirrel){
    journal.push ({events, squirrel})
}
addEntry(["work", "touched tree", "pizza", "running",
          "television"], false);
addEntry(["work", "ice cream", "cauliflower", "lasagna",
          "touched tree", "brushed teeth"], false);
addEntry(["weekend", "cycling", "break", "peanuts",
          "beer"], true);

function tableFor(event, journal){
    let table = [0, 0, 0, 0];
    for (let i = 0; i < journal.length; i++){
     let entry = journal[i], index = 0;
     if (entry.events.includes(event)) index += 1;
     if (entry.squireel) index += 2
    }
        return table
    
}

// Write a range function that takes two arguments, start and end, and returns an array 
// containing all the numbers from start up to (and including) end.

function range(start, end, step = start < end ? 1:-1){
    let array = [];

    if (step > 0){
        for (let i = start; i <= end; i += step) array.push(i);
    }else{
        for (let i = start; i >= end; i += step) array.push(i);
    }
    return array
    }
console.log(range(1, 10))

function sum(array){
    let total = 0
    for(let value of array){
        total += value;
    }
    return total
}

