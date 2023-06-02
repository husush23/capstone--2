// tests/createLike.test.js

// Import the mock function
import commentCounter from './commentCounter';

// Mocking the fetch function
describe('Comments Counter', () => {
  test('Count the number of comments', () => {
    const myObject = [{
      0: 'Rabu',
      1: 'Hussein',
      2: 'Hashi',
    }];
    const newCount = commentCounter(myObject);
    expect(newCount).toBe(1);
  });

  test('Count the number of comments', () => {
    const myObject = [1, 2, 3];
    const newCount = commentCounter(myObject);
    expect(newCount).toBe(3);
  });
});
