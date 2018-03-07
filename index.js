const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const CartCtrl = require('./controllers/CartController');
const ProductCtrl = require('./controllers/ProductController');

const app = express();
const port = 9000;

app.use(cors());
app.use(bodyParser.json());

app.get('/api/products', ProductCtrl.index);
app.post('/api/products', ProductCtrl.create);
app.put('/api/products/:id', ProductCtrl.update);
app.delete('/api/products/:id', ProductCtrl.delete);

app.get('/api/cart', CartCtrl.index);
app.post('/api/cart', CartCtrl.addToCart);
app.delete('/api/cart/:id', CartCtrl.delete);

app.listen(port, () => {
  console.log('listening on port:', port);
})