const test = require('ava');

test('Data can be retrieved', async t => {
    try {
      const data = await fetchData();
      t.assert(Array.isArray(data), 'Data retrieval failed');
    } catch (error) {
      t.fail('Data retrieval failed');
    }
});
  