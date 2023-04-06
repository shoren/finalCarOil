var dotenv = require('dotenv');
dotenv.config();
var url = process.env.DB_CONNECTION_STRING;
// node server
// const documentRoutes = require('./routes/document.routes');
// const messageRoutes = require('./routes/message.routes');
// const contactRoutes = require('./routes/contact.routes');
const carRoutes = require('./server/routes/car');

// Get dependencies
//npm install
var express = require('express');
var path = require('path');
var http = require('http');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// import the routing file to handle the default (index) route

// var index = require('./server/routes/app'); //create an app.js to find it 

// ... ADD CODE TO IMPORT YOUR ROUTING FILES HERE ... 

var mongoose = require('mongoose');
var app = express(); // create an instance of express



// establish a connection to the mongo database
mongoose.connect(DB_CONNECTION_STRING,
   { useNewUrlParser: true }, (err, res) => {
      if (err) {
         console.log('Connection failed: ' + err);
      }
      else {
         console.log('Connected to database!');
      }
   }
);

// app.use('/',index);

// app.use('/messages', messageRoutes);
// app.use('/contacts', contactRoutes);
// app.use('/documents', documentRoutes)

// Tell express to use the following parsers for POST data
// any time you use app.use it is middleware. middleware = configurations and fancy widgets that add to an express 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(cookieParser());

app.use(logger('dev')); // Tell express to use the Morgan logger

// Add support for CORS
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PATCH, PUT, DELETE, OPTIONS'
  );
  next();
});


app.use('/api/cars',carRoutes)



// Tell express to use the specified director as the
// root directory for your web site
app.use(express.static(path.join(__dirname, 'dist/caroil')));

// Tell express to map the default route ('/') to the index route
// app.use('/', index);

// ... ADD YOUR CODE TO MAP YOUR URL'S TO ROUTING FILES HERE ...

// Tell express to map all other non-defined routes back to the index page
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/cms/index.html'));
});

// create a route !!!!!!!
// create a router !
// app.get('/api/cars', (req, res) => {
//     // go to mongo & get cars from collection 
//     // create cars model, matches data in database
//     // 
//     // Cars.find().then() mongo documentation
//     // send back the data 
// });


// CRUD Methods below 
// GET
app.get('/api/cars', (req, res) => {
  // Use the Car model to retrieve all cars from the database
  car.find()
    .then(cars => {
      // return a json
      console.log('i cant find this');
      res.json(cars);
    })
    .catch(err => {
      // errors handle s
      res.status(500).json({ error: err.message });
    });
});

//insert method
app.post('/api/cars', (req, res) => {
  // create a new car object with data from request body
  const newCar = new Car({
    id: req.body.id,
    name: req.body.name,
    lastOilChangeDate: req.body.lastOilChangeDate,
    mileage: req.body.mileage,
  });

  // save the new car to the database
  newCar.save((err) => {
    if (err) {
      console.log(err);
      res.status(500).send('Error saving car to database');
    } else {
      res.status(200).send('Car saved successfully');
    }
  });
});

// Update
app.put('/api/cars/:id', (req, res) => {
  const id = req.params.id;
  const update = req.body;

  Car.findOneAndUpdate({ _id: id }, update)
    .then(updatedCar => {
      res.send(updatedCar);
    })
    .catch(error => {
      console.log(error);
      res.status(500).send(error);
    });
});


// Delete
app.delete('/api/cars/:id', (req, res) => {
  const id = req.params.id;

  Car.findOneAndDelete({ _id: id })
    .then(deletedCar => {
      res.send(deletedCar);
    })
    .catch(error => {
      console.log(error);
      res.status(500).send(error);
    });
});


app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/cms/index.html'));
});






// Define the port address and tell express to use this port
const port = process.env.PORT || '3000';
app.set('port', port);

// Create HTTP server.
const server = http.createServer(app);

// Tell the server to start listening on the provided port
server.listen(port, function() {
  console.log('API running on localhost: ' + port)
});
