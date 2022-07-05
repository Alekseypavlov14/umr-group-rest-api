const fetch = require('isomorphic-unfetch')

test('Service [POST]', async () => {
  const response = await fetch('http://localhost:4000/service', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      login: 'Alex',
      password: '0000',
      service: {
        startPrice: 60,
        name: "fbtvr" + Date.now(),
        label: "Encetrverywglish label" + Date.now(),
        additives: [
          {
            name: "A",
            label: "A label",
            price: 20
          },
          {
            name: "B",
            label: "B label",
            price: 30
          },
        ]
      }
    })
  })
  const data = await response.json()

  expect(data).toHaveProperty('service')
})

test('Service [POST] (incorrect data)', async () => {
  const response = await fetch('http://localhost:4000/service', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      login: 'Alex',
      password: '0000',
      service: {
        startPriceIncorrect: 60,
        name: "fbtvr" + Date.now(),
        label: "Encetrverywglish label" + Date.now(),
        additives: [
          {
            name: "A",
            label: "A label",
            price: 20
          },
          {
            name: "B",
            label: "B label",
            price: 30
          },
        ]
      }
    })
  })
  const data = await response.json()

  expect(data).toHaveProperty('message')
})

test('Service [UPDATE]', async () => {
  const response = await fetch('http://localhost:4000/service', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      login: 'Alex',
      password: '0000',
      id: '62c4014bc2f406937a7d8eb4',
      service: {
        startPrice: 60,
        name: "fbtvr" + Date.now(),
        label: "Encetrverywglish label" + Date.now(),
        additives: [
          {
            name: "A",
            label: "A label",
            price: 20
          },
          {
            name: "B",
            label: "B label",
            price: 30
          },
        ]
      }
    })
  })
  const data = await response.json()

  expect(data).toHaveProperty('service')
})

test('Service [UPDATE] (incorrect data)', async () => {
  const response = await fetch('http://localhost:4000/service', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      login: 'Alex',
      password: '0000',
      id: '62c4014bc2f406937a7d8eb4',
      service: {
        startPriceIncorrect: 60,
        name: "fbtvr" + Date.now(),
        label: "Encetrverywglish label" + Date.now(),
        additives: [
          {
            name: "A",
            label: "A label",
            price: 20
          },
          {
            name: "B",
            label: "B label",
            price: 30
          },
        ]
      }
    })
  })
  const data = await response.json()

  expect(data).toHaveProperty('message')
})

test('Service [DELETE]', async () => {
  const response = await fetch('http://localhost:4000/service', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      login: 'Alex',
      password: '0000',
      id: '62c4014bc2f406937a7d8eb4'
    })
  })
  const data = await response.json()

  expect(data).toHaveProperty('service')
})

test('Service [DELETE] (incorrect data)', async () => {
  const response = await fetch('http://localhost:4000/service', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      login: 'Alex',
      password: '0000',
      idIncorrect: '62c4014bc2f406937a7d8eb4'
    })
  })
  const data = await response.json()

  expect(data).toHaveProperty('message')
})