const test = require('ava');

test('Data is accurate', t => {
    const result = 2 + 2;
    t.is(result, 4, 'Data is inaccurate');
});
  