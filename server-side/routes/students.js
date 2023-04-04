const express = require('express');
const mongoose = require('../mongoose'); 
const router = express.Router(); 
const Student = require('../schemas/student'); 



const MyModel = mongoose.model('students', {}); 

// middleware that is specific to this router
router.use((req, res, next) => {
  console.log('Time: ', Date.now())
  next()
})

// define the home page route
router.get('/', (req, res) => {
  MyModel.find().then(docs => {
    // do something with the docs
    res.json(docs);
  }).catch(err => {
    // handle the error
    console.log('Error getting students:', err);
res.status(500).send('Error getting students');
  });
})

// define the about route
router.get('/about', (req, res) => {
  res.send('About birds')
})

router.post('/api/formdata', async (req, res) => {
  const formData = req.body;
  const newStudent = new Student(formData);
  try {
    const savedDocument = await newStudent.save();
    console.log('Document saved:', savedDocument);
    res.send('Form Data Saved to Database'); 
  
  } catch (error) {
    console.error('Error saving document:', error);
  }  
});

module.exports = router