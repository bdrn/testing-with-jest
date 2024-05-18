const stack = require('../src/stack');

// Nytt testfall för clear-funktionaliteten
test('clear removes all elements from the stack', () => {
    stack.push(1);
    stack.push(2);
    stack.push(3);
    stack.clear();
    expect(stack.isEmpty()).toBe(true);
    expect(stack.peek()).toBeUndefined();
});