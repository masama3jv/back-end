const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('MongoDB connectat correctament');
  } catch (err) {
    console.error('Error de connexió a MongoDB:', err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
