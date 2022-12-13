const express = require("express");
const app = express();
const PORT = 8080
app.listen(PORT, ()=>{
  console.log('server On')
})

const Contenedor = require('./desafio2.js')
const listaProductos = new Contenedor('./productos.txt')

app.get('/productos', async (req, res) => {
  const productos = await listaProductos.getAll();
    res.send(productos);
})

app.get('/productos/:id', async (req, res) => {
  const producto = await listaProductos.find(producto => producto.id === parseInt(req.params.id));
    res.send(producto);
})
// Nota
// primer ruta te falta verificar si recibis query "limit" para limitar la vista de los productos
// no entiendo a que se refiere con esta parte