const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  products: [
    {
      productId: mongoose.Schema.Types.ObjectId, // Storage for reference
      name: String,
      price: Number,
      quantity: Number,
      imageUrl: String
    }
  ],
  total: { type: Number, required: true },
  paymentMethod: { type: String, enum: ['card', 'paypal'], required: true },
  status: { type: String, default: 'pending' },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Order', orderSchema);
