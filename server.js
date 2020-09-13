const express = require('express');
const connectDB = require('./DB/Conncection');

const app = express();

connectDB();

app.options("/*", function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    res.sendStatus(200);
});

app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    next();
});

app.use(express.json({ extended: false }));
app.use('/api/userModel', require('./Api/User'));

app.use('/api/productModel', require('./Api/Products'));

app.use('/api/productModel', require('./Api/Products'));



const Port = process.env.Port || 3000;
console.log("listen on ..." ,Port);
app.listen(Port, () => console.log('Server started'));
