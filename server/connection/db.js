const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
      await mongoose.connect(process.env.DB_HOST, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(res=>console.log('Success'))
    .catch(err=>console.log(err));
    
};

module.exports = connectDB;