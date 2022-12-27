const fs = require('fs')
const express = require("express");
const {Router} = express;

const productos = Router();
const app = express();
const PORT = 8080
app.listen(PORT, ()=>{
  console.log('server On')
})
app.use(express.static('4/public/index.html'))
app.use(productos)

let data =fs.readFileSync('./data/productos.json')
let cart =fs.readFileSync('./data/carrito.json')


productos.get('/api/productos', (req, res) => {
  let prods = JSON.parse(data)
  res.send(prods)
})
productos.put('/api/productos/:id', (req, res) => {
  const producto = data.find(producto => producto.id === parseInt(req.params.id))
  res.send(producto)
})
productos.get('/api/productos/:id', (req, res) => {
  const producto=data.find(producto => producto.id === parseInt(req.params.id))
  res.send(producto)
})
productos.post('/api/productos', (req, res) => {
  const producto = {
    id: listaProductos.length + 1,
    tittle: req.body.tittle,
    precio: req.body.precio,
    thumbnail: req.body.thumbnail,
    status: req.body.status,
    stock: req.body.stock,
    category: req.body.category,
  }
  data.push(producto)
  res.send(producto)
  console.log('guardado con exito')
} )
productos.delete('/api/productos/:id', (req, res) => {
  const producto = data.find(producto => producto.id === parseInt(req.params.id))
  if (!producto) return res.status(404).send('Producto no encontrado')
  const index = data.indexOf(producto)
  data.splice(index, 1)
  res.send(producto)
} )


