const add = (a, b) => a + b;
const generateGreeting = (name) => `Hi ${name}!`;

test('should add two numbers', () => {
  const result = add(3, 4);
  expect(result).toBe(7)
});

test('should greet person', () => {
  const result = generateGreeting('Mike')
  expect(result).toBe('Hi Mike!');
});