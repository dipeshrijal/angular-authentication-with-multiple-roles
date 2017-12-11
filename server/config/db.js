module.exports = function (mongoose, config) {
  mongoose.connect(config.MONGO_URI, {useMongoClient: true});
  const monDb = mongoose.connection;

  monDb.on('error', function () {
    console.error('MongoDB Connection Error. Please make sure that is running.');
  });

  monDb.once('open', function callback() {
    console.info('Connected to MongoDB:');
  });
};

