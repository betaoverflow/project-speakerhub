const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  bio: {
    type: String,
    required: true
  },
  facebook: {
    type: String,
    required: true
  },
  instagram: {
    type: String,
    required: true
  },
  profession: {
    type: String,
    required: true
  },
  company_name: {
    type: String,
    required: true
  },
  past_talks:{
    type: String,
    required: true
  },
  profile_image:{
    type: String,
    required: true
  }
});

module.exports = User = mongoose.model("users", UserSchema);
