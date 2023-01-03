const express = require("express");
const handlebars = require('express-handlebars')
const router = require ('./routes/views.router.js')

const app = express();

app.engine('handlebars', handlebars.engine())
app.set('views','/views')
app.set('view engine', 'handlebars')

app.use('/',router)


const PORT = 8080
app.listen(PORT, ()=>{
  console.log('server On')
})


