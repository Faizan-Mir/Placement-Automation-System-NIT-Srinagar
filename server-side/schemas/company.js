const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose); 

const CompanySchema = new mongoose.Schema({
  
  name: {
    type: String,
    required: true,
  },
  associatedJobIDs: {
    type: [String],
    default: [],
  },
  hrDetails: {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
  },
  crcAssociated: {
    type: String,
  },
  category: {
    type: String,
  },
  placementSession: {
    type: String,
  },
  postalAddress: {
    type: String,
    
  },
  additionalDetails: {
    type: String,
    default: '',
  },
  companyId: { type: String, default: 'C123'},
});

// CompanySchema.plugin(AutoIncrement, { inc_field: 'companyId' });

module.exports = mongoose.model('Company', CompanySchema);
