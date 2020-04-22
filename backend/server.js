const express = require('express')
const app = express()
const cors = require('cors')

// mock data
const products = [
  {
    id: '1001',
    name: 'Node.js for Beginners',
    category: 'Node',
    price: 990
  },
  {
    id: '1002',
    name: 'React 101',
    category: 'React',
    price: 3990
  },
  {
    id: '1003',
    name: 'Getting started with MongoDB',
    category: 'MongoDB',
    price: 1990
  }
]

var whitelist = ['http://localhost:4200', 'http://frontend']

var corsOptionsDelegate = function (req, callback) {
  var corsOptions;
  if (whitelist.indexOf(req.header('Origin')) !== -1) {
    corsOptions = { origin: true } // reflect (enable) the requested origin in the CORS response
  } else {
    corsOptions = { origin: false } // disable CORS for this request
  }
  callback(null, corsOptions) // callback expects two parameters: error and options
}

app.get('/products', cors(corsOptionsDelegate), (req, res) => {
  res.json(products)
})

app.get('/products/:id', cors(corsOptionsDelegate), (req, res) => {
  const { id } = req.params
  const result = products.find(product => product.id === id)
  res.json(result)
})

app.post('/products', cors(corsOptionsDelegate), (req, res) => {
  const payload = req.body
  res.json(payload)
})

app.put('/products/:id', cors(corsOptionsDelegate), (req, res) => {
  const { id } = req.params
  res.json({ id })
})

app.delete('/products/:id', cors(corsOptionsDelegate), (req, res) => {
  const { id } = req.params
  res.json({ id })
})

app.listen(9000, () => {
  console.log('Application is running on port 9000')
})