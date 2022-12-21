const express = require("express");
const {Router} = express;

const productos = Router();
const app = express();
const PORT = 8080
app.listen(PORT, ()=>{
  console.log('server On')
})

const listaProductos=[ 
  {tittle:"Producto 1", precio:100 , thumbnail:'foto 1', id:1, status:true,description:"Producto numero 1" ,category:1,},
  {tittle:"Producto 2", precio:200 , thumbnail:'foto 2' ,id:2, status:true,description:"Producto numero 2" ,category:1,},
  {tittle:"Producto 3", precio:300 , thumbnail:'foto 3', id:3, status:true,description:"Producto numero 3" ,category:2,},
]
productos.get('/api/productos', (req, res) => {
  res.send(listaProductos)
})
productos.put('/api/productos/:id', (req, res) => {
  const producto = listaProductos.find(producto => producto.id === parseInt(req.params.id))
  
  res.send(producto)
})
productos.get('/api/productos/:id', (req, res) => {
  const producto=listaProductos.find(producto => producto.id === parseInt(req.params.id))
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
  listaProductos.push(producto)
  res.send(producto)
  console.log('guardado con exito')
} )
productos.delete('/api/productos/:id', (req, res) => {
  const producto = listaProductos.find(producto => producto.id === parseInt(req.params.id))
  if (!producto) return res.status(404).send('Producto no encontrado')
  const index = listaProductos.indexOf(producto)
  listaProductos.splice(index, 1)
  res.send(producto)
} )
app.use(productos)
app.use(express.static('4/public/index.html'))

