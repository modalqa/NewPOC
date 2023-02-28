const test = require('ava');

test('Data is consistent', t => {
    const data = [1, 2, 3];
    const result1 = data.slice(0, 2);
    const result2 = data.slice(0, 2);
    t.deepEqual(result1, result2, 'Data is not consistent');
});
  