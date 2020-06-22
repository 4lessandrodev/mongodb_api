const requireDir = require('require-dir');
requireDir('./../models');
const mongoose = require('mongoose');
const Product = mongoose.model('Product');
module.exports = {
  
  index: async (req, res) => {
    let { page = 1, limit = 10 } = req.query;
    const products = await Product.paginate({}, {page, limit});
    return res.status(200).json({ products });
  },

  store: async (req, res) => {
    const product = Product.create(req.body);
    return res.status(200).json(product);
  },

  show: async(req, res)=>{
    const product = await Product.findById(req.params.id);
    return res.status(200).json(product);
  },

  update: async (req, res) => {
    //new:true faz com que o mongo retorne para a variavel product o novo produto 
    const product = await Product.findByIdAndUpdate(req.params.id, req.body,{new:true} );
    return res.status(200).json(product);
  },

  destroy: async (req, res) => {
    const product = await Product.findByIdAndDelete(req.params.id);
    res.status(200).json(product);
  }
  
};