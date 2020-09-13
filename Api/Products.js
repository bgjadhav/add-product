const express = require('express');
const mongoose = require('mongoose');
const Product = require('../DB/Product');
const route = express.Router();


route.post('/', async (req, res) => {
  const { productName, costPrice , sellingPrice ,quantity } = req.body;
  let product = {};
  product.productName = productName;
  product.costPrice = costPrice;
  product.sellingPrice = sellingPrice;
  product.quantity = quantity;
  console.log(req);
  let productModel = new Product(product);
  await productModel.save();
  res.json(productModel);
});

route.get('/', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

route.post('/update', async (req, res) => {
    try {
        const { productName, costPrice , sellingPrice ,quantity } = req.body;
        let product = {};
        product.productName = productName;
        product.costPrice = costPrice;
        product.sellingPrice = sellingPrice;
        product.quantity = quantity;
         await Product.update({_id: req.body._id},product , function(err, product) {
        if(err) {
            res.json({
                error : err
            })
        }
        res.json({
            message : "Product updated successfully"
        })
    });
    
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  });

module.exports = route;
