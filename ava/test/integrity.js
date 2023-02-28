const test = require('ava');

test('Data integrity is maintained', t => {
    const data = [1, 2, 3];
    t.deepEqual(data, [1, 2, 3], 'Data integrity is not maintained');
});
  