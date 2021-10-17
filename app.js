const express = require('express');
const mongoose = require('mongoose');

const app = express();

// middleware
app.use(express.static('public'));

// view engine
app.set('view engine', 'ejs');

// database connection
const dbURI = 'ConnectionString connectionString = new ConnectionString("mongodb+srv://sa:sapwd1234@smartagriculture.cp6lg.mongodb.net/thos?retryWrites=true&w=majority");
                MongoClientSettings settings = MongoClientSettings.builder()
                  .applyConnectionString(connectionString)
                  .build();
                MongoClient mongoClient = MongoClients.create(settings);
                MongoDatabase database = mongoClient.getDatabase("test");';

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true })
  .then((result) => app.listen(3000))
  .catch((err) => console.log(err));

// routes
app.get('/', (req, res) => res.render('home'));
