const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const bcrypt = require('bcrypt');


const app = express();

// Enable CORS
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb+srv://seancolhoun2020:dW2Mpi6beFHEdMor@finalyear.3zypdnj.mongodb.net/')

// Define a schema for your data
const loginSchema = new mongoose.Schema({
  email: String,
  password: String,
  firstName: String,
  lastName: String,
  dob: String,
});

// Create a model based on the schema
const LoginModel = mongoose.model('Login', loginSchema);

// Middleware to parse JSON requests
app.use(bodyParser.json());

// Route to handle create form submission
app.post('/api/create', async (req, res) => {
  try {
    // Create a new document using the data from the request body
    

    const { email, password, firstName, lastName, dob } = req.body;
    const existingUser = await LoginModel.findOne({ email: req.body.email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email already exists' } );
    }
 
    // Strip the time component
     const dobDate = new Date(req.body.dob);
    const dateClean = dobDate.toISOString().split('T')[0];

     const hashedPassword = await bcrypt.hash(req.body.password, 10);

     const loginData = new LoginModel({
      email: req.body.email,
      password: hashedPassword,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      dob: dateClean,
    });
    // Save the document to the database
    await loginData.save();
    
     res.status(201).json({ message: 'Data saved successfully!'});

    
  } catch (error) {
    res.status(500).json({ message: 'Error saving data' });
  }
});



// Route to handle create form submission
app.post('/api/login', async (req, res) => {
  try {
    // Create a new document using the data from the request body
    

    const { email, password } = req.body;
    const existingUser = await LoginModel.findOne({ email });
    if (!existingUser) {
      return(res.status(404).json({message: 'User is not found in db'}));

    }
    const matchPassword = await bcrypt.compare(password, existingUser.password)

    if(!matchPassword){
      return(res.status(401).json({message: 'Password doesnt match'}));
    }

    res.status(200).json({ message: 'Login successful' ,  existingUser,});
    
      
    

    
  } catch (error) {
    res.status(500).json({ message: 'Error logging in (server)' });
  }
});






// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
