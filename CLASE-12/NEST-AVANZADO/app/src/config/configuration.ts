export default () => ({
  mongoUri: process.env.MONGO_URI,
  papa: process.env.PAPA,
  mode: process.env.MODE,
});
