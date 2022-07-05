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
        name: "fbtvr",
        label: "Encetrverywglish label",
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