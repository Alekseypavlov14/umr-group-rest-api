const fetch = require('isomorphic-unfetch')

test('Services [GET]', async () => {
  const response = await fetch('http://localhost:4000/services')
  const data = await response.json()

  expect(data).toHaveProperty('services')
})