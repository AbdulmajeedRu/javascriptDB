const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const items = require('./routes/api/Items');
const app = express();


//BodyParser Middleware
app.use(bodyParser.json());


//DB config 
const db = require('./config/keys').mongoURI;

//connect to mongodb
mongoose
.connect(db)
.then(()=> console.log('MongoDB connected...'))
.catch(err => console.log(err));

//use routes
app.use('/api/items',items);

const port = process.env.PORT || 5000;
app.listen(port, ()=> console.log(`Server Started on port ${port}`));


const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://Majeed:1122334455@cluster0.lhilx.mongodb.net/csystems?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});
