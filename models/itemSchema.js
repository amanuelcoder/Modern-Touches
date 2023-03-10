const Schema = require('mongoose').Schema;

const itemSchema = new Schema({
  name: { type: String, required: true },
  description: {type: String},
  images: [{type: String}],
  category: {type: Schema.Types.ObjectId, ref: 'Category'},
  price: { type: Number, required: true }
}, {
  timestamps: true
});

module.exports = itemSchema;
