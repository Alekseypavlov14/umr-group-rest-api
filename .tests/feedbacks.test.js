const fetch = require('isomorphic-unfetch')

test('Feedbacks [GET]', async () => {
  const response = await fetch('http://localhost:4000/feedbacks')
  const data = await response.json()

  expect(Array.isArray(data.feedbacks)).toBeTruthy()
})