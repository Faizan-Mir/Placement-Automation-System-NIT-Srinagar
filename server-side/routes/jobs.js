const express = require('express');
const mongoose = require('../mongoose');
const router = express.Router(); 
const Job = require('../schemas/job'); 


const MyModel = mongoose.model('jobs', {});

router.use((req,res,next)=> {
    console.log('Time: ', Date.now())
    next()
})

router.get('/', (req, res) => {
    MyModel.find().then(docs => {
      // do something with the docs
      console.log(docs); 
      res.json(docs);
    }).catch(err => {
      // handle the error
      console.log('Error getting Jobs:', err);
  res.status(500).send('Error getting Jobs');
    });
  })

router.post('/add', async(req, res)=>{
    const formData = req.body;
    console.log(formData); 
    const newJob = new Job(formData); 
    try{
        const savedDocument = await newJob.save(); 
        console.log('Document saved:', savedDocument);
        res.send('Form Data Saved to Database');
    } catch (error) {
        console.error('Error saving document:', error);
      }  
});

module.exports = router