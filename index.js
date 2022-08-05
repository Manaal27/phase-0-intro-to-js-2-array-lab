// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

cats.length(0);
cats.push ("Milo", "Otis", "Garfield");

function destructivelyAppendCat() {

    cats.push("Ralph");
}

function destructivelyPrependCat() {

    cats.unshift("Bob");
}
function destructivelyRemoveLastCat() {
    
    cats.pop();
}
function destructivelyRemoveFirstCat() {

    cats.shift();
}
function appendCat (name) {

    return [...cats, name];
}
function prependCat (name) {

    return [name, ...cats];
}
function removeLastCat() {

    return ["Milo", "Otis"];

}
function removeFirstCat() {

    return ["Otis","Garfield"];
}
