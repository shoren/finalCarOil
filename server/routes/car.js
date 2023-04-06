var express = require('express');
var router = express.Router();
module.exports = router; 

router.post('/', async (req, res) => {
    const { id, name, lastOilChangeDate, mileage } = req.body;
    const car = new Car({ id, name, lastOilChangeDate, mileage });
  
    try {
      await car.save();
      res.send(car);
    } catch (err) {
      res.status(500).send(err);
    }
  });

// Get
router.get('/api/cars', (req, res) => {
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
router.post('/api/cars', (req, res) => {
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
router.put('/api/cars/:id', (req, res) => {
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
router.delete('/api/cars/:id', (req, res) => {
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