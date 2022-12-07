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

app.get('/productoRandom', async (req, res) => {
  const producto = await listaProductos.getRandom();
    res.send(producto);
})
