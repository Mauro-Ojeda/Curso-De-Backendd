const express = require('express')
const {Server : HttpServer } =require ("http")
const {Server:IOServer} = require ("socket.io")

const app = express();
const httpServer = new HttpServer(app)
const io = new IOServer(httpServer)



app.use(express.static('public'))

app.set('view engine', 'handlebars');
app.get('/', function(req, res) {
  res.render('views/form');
});
app.get('/productos', function(req, res) {
  res.render('views/index',productos);
});

const PORT = 8080
app.listen(PORT, ()=>{
  console.log('Server On')
})