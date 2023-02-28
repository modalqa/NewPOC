const test = require('ava');

test('Data is complete', t => {
    const data = {
      name: 'John',
      age: 30,
      address: '123 Main Street',
    };
    t.assert(Object.keys(data).length === 3, 'Data is incomplete');
});
  