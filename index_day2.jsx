const express = require('express')
const res = require('express/lib/response')
const app = express()
const port = 3000
const cors = require('cors');
app.use(express.json());
app.use(cors());

const cars = [
    {
        id: 1,
        model: "Toyota",
        maxSpeed: 200,
    },
    {
        id: 2,
        model: "Mazda",
        maxSpeed: 250,
    },
    {
        id: 3,
        model: "Porsche",
        maxSpeed: 300,
    },
]

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/api/cars', (req, res) => {
    res.json(cars)
})

app.post('/api/cars', (req, res) => {
    
    console.log(req.body);
    if (!req.body.model) return res.send("nothing done")
    /*const newCar = {model: req.body.model, maxSpeed: req.body.maxSpeed, id: cars.length+1} 
    */
    const newCar = {...req.body, id: cars.length+1} 
    cars.push(newCar);
    res.send("DONE");

});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})