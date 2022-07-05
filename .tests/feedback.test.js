const fetch = require('isomorphic-unfetch')

test('Feedback [POST]', async () => {
  const response = await fetch('http://localhost:4000/feedback', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      feedback: {
        author: "Alex",
        content: "like"
      }
    })
  })
  const data = await response.json()

  expect(data).toHaveProperty('feedback')
})

test('Feedback [POST] (Incorrect data)', async () => {
  const response = await fetch('http://localhost:4000/feedback', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      feedback: {
        authorIncorrect: "Alex",
        content: "like"
      }
    })
  })
  const data = await response.json()

  expect(data.message).toBe('incorrect data')
})