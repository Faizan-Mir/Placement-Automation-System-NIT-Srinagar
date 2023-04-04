const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  enrolmentNumber: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  branch: { type: String, enum: ['CSE', 'ECE', 'ME', 'CE', 'EE'] },
  batch: { type: Number, enum: [2017, 2018, 2019, 2020, 2021] },
  contactDetails: {
    email: { type: String },
    phoneNo: { type: String },
    fullAddress: { type: String }
  },
  resumeLink: { type: String },
  results: {
    sgpaArray: { type: [Number] },
    currentCgpa: { type: Number }
  },
  currentStatus: { type: String, enum: ['Placed', 'Not Placed'] },
  jobOffers: { type: [String] },
  personalDetails: {
    category: { type: String, enum: ['General', 'OBC', 'SC', 'ST'] }
  }
});

module.exports = mongoose.model('Student', studentSchema);




// use case 
/*
  const student = new Student({
    enrolmentNumber: '12345878',
    name: 'John Doe',
    branch: 'CSE',
    batch: '2020',
    contactDetails: {
      email: 'john.doe@example.com',
      phone: '1234567890',
      address: '123 Main St, Anytown, USA',
    },
    resumeLink: 'https://example.com/johndoe.pdf',
    results: {
      sgpa: [9.0, 9.1, 8.8, 9.2],
      cgpa: 9.0,
    },
    currentStatus: 'Not Placed',
    jobOffers: [],
    personalDetails: {
      category: 'General',
    },
  });
  
  student.save()
    .then(() => console.log('Student saved to database'))
    .catch((err) => console.error(err));

*/ 