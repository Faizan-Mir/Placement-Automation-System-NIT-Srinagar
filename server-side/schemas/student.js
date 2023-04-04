const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  enrolmentNumber: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  branch: {
    type: String,
    enum: ['CSE','IT', 'ECE', 'ELE', 'MEC', 'CIV', 'CHE', 'MME'],
    required: true
  },
  batch: {
    type: String,
    required: true
  },
  contactDetails: {
    email: {
      type: String,
      required: true
    },
    phone: {
      type: String,
      required: true
    },
    address: {
      type: String,
      required: true
    }
  },
  resumeLink: {
    type: String,
    
  },
  results: {
    sgpaArray: {
      type: [Number],
      
    },
    currentCGPA: {
      type: Number,
      
    }
  },
  currentStatus: {
    type: String,
    
  },
  numberOfOffers: {
    type: Number,
   
  },
  currentCTC: {
    type: Number,
    
  },
  currentJobRole: {
    type: String,
    
  },
  currentCompany: {
    type: String,
    
  },
  jobIDArray: {
    type: [String],
    
  },
  category: {
    type: String,
    enum: ['gen', 'sc', 'st', 'obc', 'ews'],
    required: true
  },
  personalDetails: {
    fathersName: {
      type: String,
      required: true
    },
    mothersName: {
      type: String,
      required: true
    },
    bloodGroup: {
      type: String,
      enum: ['a+', 'a-', 'b+', 'b-', 'o+', 'o-', 'ab+', 'ab-'],
      required: true
    }
  }
});

module.exports = mongoose.model('Student', studentSchema);
