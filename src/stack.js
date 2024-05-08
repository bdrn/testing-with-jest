const _ = require('underscore');

let stack = [];

// Lägger ett element överst i stacken
exports.push = function (x) {
    stack.push(x);
};

// Returnerar det översta elementet i stacken och tar bort det
exports.pop = function () {
    return stack.pop();
};

// Returnerar det översta elementet i stacken
exports.peek = function () {
    if (stack.length === 0) {
        return undefined; // Returnera undefined om stacken är tom
    }
    return _.last(stack);
};
