const express = require('express');

var mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/mudb2')
.then(() => console.log('Connected to MongoDB'))
.catch(() => console.log('Failed to connect to MongoDB'));

var ProductModel = require('./models/Product')

const app = express();
const port = 4000;

app.use(express.static('public'));
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/savedata' , (req, res) => {

  var userdata = {
    pname : 'Vivo Y22',
    pprice : 15000,
    pdetails : 'Latest smartphone with great features'
  }

   var myData = ProductModel(userdata)
    myData.save()
    .then(() => res.send('Data saved successfully'))

});

app.post('/addData' , (req , res) => {

  ProductModel.create(req.body)
  .then(() =>{
    res.json({flag:1 , msg:'Data added successfully'})
  })

})

app.get(('/getdata') , (req,res) =>{
  ProductModel.find()
  .then((data) => 
    res.send(data))
  
})


app.get('/home', (req, res) => {
 // res.send('Home Page!');
 res.sendFile(__dirname + '/home.html');
});


app.get('/about', (req, res) => {
  //res.send('About Page!');
  res.sendFile(__dirname + '/about.html');
});

app.get('/contact', (req, res) => {
  //res.send('Contact Page!');
  res.sendFile(__dirname + '/contact.html');
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});