const mongoose = require('mongoose');

const URI ="mongodb+srv://admin:gaurav992011@cluster0.5jld0.mongodb.net/demoDb?retryWrites=true&w=majority";

const connectDB = async () => {
  await mongoose.connect(URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true
  });
  console.log('db connected..!');
};

module.exports = connectDB;
