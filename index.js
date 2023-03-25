let cats = ['Milo', 'Otis', 'Garfield']

function destructivelyAppendCat(name="Ralph") {
    return cats.push(name);
}

function destructivelyPrependCat(name="Bob") {
    return cats.unshift(name);
}

function destructivelyRemoveLastCat() {
    return cats.pop();
}

function destructivelyRemoveFirstCat() {
    return cats.shift();
}

function appendCat(name = "Broom") {
    return [...cats, name];
}

function prependCat(name="Arnold") {
    return [name,...cats];
}

function removeLastCat() {
    let newArray = cats.slice(0,-1);
    return newArray;
}

function removeFirstCat()  {
    return cats.slice(1);
}