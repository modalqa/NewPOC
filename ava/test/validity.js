const test = require('ava');

test('Input data is valid', t => {
    const input = 'hello';
    t.assert(typeof input === 'string', 'Input data is not a string');
});
  