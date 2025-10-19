const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true, minlength: 2 },
  description: { type: String, maxlength: 1000 },
  price: {
    type: Number,
    required: true,
    min: [0, 'El preu ha de ser >= 0'],
    validate: {
      validator: v => v >= 0,
      message: props => `${props.value} no és un preu vàlid`
    }
  },
  category: { type: String, enum: ['electronics','clothing','books','others'], default: 'others' },
  stock: { type: Number, default: 0, min: 0 },
  createdAt: { type: Date, default: Date.now }
});

// Índexs: buscar por name (text) y category
productSchema.index({ name: 'text', category: 1 });

module.exports = mongoose.model('Product', productSchema);
