const dotenv = require('dotenv');
dotenv.config({ path: './.env/config.env' });

const mongoose = require('mongoose');
const app = require('./app');


const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASS);

mongoose.connect(DB, { useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false })
  .then(() => console.log('DB connection successful'));

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});