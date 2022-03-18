class Fruit {
    constructor(name) {
        this.name = name;
    }
}

let fruits = [
    new Fruit('Apple'),
    new Fruit('Banana'),
    new Fruit('Grape'),
    new Fruit('Strawberry'),
    new Fruit('Orange')
]

module.exports.findFruits = function() {
    return fruits;
}

module.exports.findFruit = function(name) {
    return fruits.find(f => f.name === name);
}