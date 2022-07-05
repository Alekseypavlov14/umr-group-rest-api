const fetch = require('isomorphic-unfetch')

test('Services [GET]', async () => {
  const response = await fetch('http://localhost:4000/services')
  const data = await response.json()

  expect(data).toHaveProperty('services')
})

test('Service by id [GET]', async () => {
  const response = await fetch('http://localhost:4000/services/62c3fce45daf4d75f4bcef6a')
  const data = await response.json()

  expect(data).toHaveProperty('service')
})

test('Service by id [GET] (invalid id)', async () => {
  const response = await fetch('http://localhost:4000/services/62c3fce45daf4d75f4bcef6')
  const data = await response.json()

  expect(data.message).toBe('incorrect id')
})

test('Service by id [GET] (not found)', async () => {
  const response = await fetch('http://localhost:4000/services/62c3fce45daf4d75f4bcef6b')
  const data = await response.json()

  expect(data.message).toBe('service is not found')
})