let products = require('../products');

module.exports = {
  index: (req, res) => {
    res.send(products);
  },

  create: (req, res) => {
    let id = products[products.length -1].id
    id++
    let newProduct = {id, ...req.body}
    products.push(newProduct);
    res.send(products);
  },

  update: (req, res) => {
    const { id } = req.params;
    let index = products.findIndex(product => product.id === Number(id));
    products.splice(index, 1, req.body);
    res.send(products);
  },

  delete: (req, res) => {
    const { id } = req.params;
    const index = products.findIndex(product => product.id === Number(id));
    products.splice(index, 1);
    res.send(products);
  }
}