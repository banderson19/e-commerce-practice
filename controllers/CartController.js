let cart = [];

module.exports = {
  index: (req, res) => {
    res.send(cart);
  },

  addToCart: (req, res) => {
    cart.push(req.body);
    res.send(cart);
  },

  delete: (req, res) => {
    const { id } = req.params;
    const index = cart.findIndex(item => item.id === Number(id));
    cart.splice(index, 1);
    res.send(cart);
  }
}