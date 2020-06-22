const express = require('express');
const app = express();
const mongoose = require('mongoose');
const productsRouter = require('./src/routes/product');
const cors = require('cors');

mongoose.connect('mongodb://localhost:27017/nodeapi', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/api/products', productsRouter);

app.listen(3000);
