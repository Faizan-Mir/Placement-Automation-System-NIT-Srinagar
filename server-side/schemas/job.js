const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
  session: {
    type: String,
    required: true,
  },
  companyId: {
    type: String,
    required: true,
  },
  ctc: {
    type: String,
    required: true,
  },
  ctcBreakdown: {
    type: String,
  },
  role: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    
  },
  branchesEligible: {
    type: [String],
    required: true,
  },
  category: {
    type: String,
  },
  applicationsArray: {
    type: [String],
    default: [],
  },
  selectedArray: {
    type: [String],
    default: [],
  },
  blockingType: {
    type: String,
  },
  declaredAs: {
    type: String,
  },
  JobDescription: {
    type: String,
    
  },
  additionalDetailsFormLink: {
    type: String,
  },
});

module.exports = mongoose.model("Job", jobSchema);
