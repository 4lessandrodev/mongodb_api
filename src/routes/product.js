const express = require('express');
const routes = express.Router();
const produtoController = require('./../controllers/ProductController');

routes.get('/list', produtoController.index);
routes.post('/store', produtoController.store);
routes.get('/find/:id', produtoController.show);
routes.put('/update/:id', produtoController.update);
routes.delete('/delete/:id', produtoController.destroy);


module.exports = routes;