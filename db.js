const mongoose = require('mongoose');

/**
 * @function
 * Connecting to Mongo DB.
 */
const connectDB = async () => {
  const conn = await mongoose.connect(process.env.MONGO_DB_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  });
  console.log(`MongoDB connected: ${conn.connection.host}:${conn.connection.port}`);
};

module.exports = connectDB;
