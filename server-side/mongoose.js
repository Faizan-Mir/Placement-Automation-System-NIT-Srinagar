const mongoose = require('mongoose'); 

// Connection String
// Make sure your current IP address is added in Mongo DB Atlas 
mongoose.connect('mongodb+srv://localhost:Inspiron@cluster0.44ohpen.mongodb.net/faizan?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch((err) => console.error(err));


  module.exports = mongoose.connection; 