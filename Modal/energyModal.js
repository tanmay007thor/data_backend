// Define the schema for the modal
const mongoose = require('mongoose');
const { Schema } = mongoose;

const dataSchema = new Schema({
  end_year: { type: String, required: false },
  intensity: { type: Number, required: true },
  sector: { type: String, required: true },
  topic: { type: String, required: true },
  insight: { type: String, required: true },
  url: { type: String, required: true },
  region: { type: String, required: true },
  start_year: { type: String, required: false },
  impact: { type: String, required: false },
  added: { type: String, required: true },
  published: { type: String, required: true },
  country: { type: String, required: true },
  relevance: { type: Number, required: true },
  pestle: { type: String, required: true },
  source: { type: String, required: true },
  title: { type: String, required: true },
  likelihood: { type: Number, required: true }
});

// Define the model for the modal
const Data = mongoose.model('data_set', dataSchema);

module.exports = Data;
