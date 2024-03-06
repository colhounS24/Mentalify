const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const bcrypt = require('bcrypt');
const nodemailer = require('nodemailer');

const app = express();

// Enable CORS
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb+srv://seancolhoun2020:dW2Mpi6beFHEdMor@finalyear.3zypdnj.mongodb.net/');

const loginSchema = new mongoose.Schema({
  email: String,
  password: String,
  firstName: String,
  lastName: String,
  dob: String,
  highScore: { type: Number, default: 999999 },
  code: Number, // Define highScore as a Number with default value 999999
});

// Create a model based on the schema
const LoginModel = mongoose.model('Login', loginSchema);

// Middleware to parse JSON requests
app.use(bodyParser.json());

// Function to send registration email
const sendRegistrationEmail = async (email, firstName) => {
  try {
    // Create a Nodemailer transporter
    let transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: 'mentalifyfyp@gmail.com', // Your email address
        pass: 'uyge ktyq ndjg zbyw' // Your email password
      }
    });

    // Email content
    let mailOptions = {
      from: 'Mentalify <mentalifyfyp@gmail.com>',
      to: email,
      subject: 'Welcome to Mentalify',
      text: `To ${firstName},

Welcome to Mentalify, your one-stop shop for learning about conditions connected to memory loss and improving your memory with entertaining activities!


We are so happy to have you join us. What lies ahead for you is as follows:

Learn: Explore resources on disorders of the memory and practical management strategies.
Play: Engage in enjoyable brain-training games that improve memory and cognitive function.


Please get in touch if you need help or if you have any questions. We are available to assist you!

Warm regards,
The Mentalify Team`
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent:", info.response);
  } catch (error) {
    console.log("Error occurred while sending email:", error);
    throw error; // Throw the error to catch it in the calling function
  }
};

// Route to handle create form submission
app.post('/api/create', async (req, res) => {
  try {
    const { email, password, firstName, lastName, dob } = req.body;
    const existingUser = await LoginModel.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ message: 'Email already exists' });
    }

    // Strip the time component
    const dobDate = new Date(req.body.dob);
    console.log(req.body.dob);
    const dateClean = dobDate.toISOString().split('T')[0];

    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const highScore = req.body.highScore !== undefined ? req.body.highScore : null;

    const loginData = new LoginModel({
      email: req.body.email,
      password: hashedPassword,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      dob: dateClean,
    

    });

    // Save the document to the database
    await loginData.save();

    // Send registration email
    await sendRegistrationEmail(email, firstName);

    res.status(201).json({ message: 'Data saved successfully!' });
  } catch (error) {
    console.log("Error saving data:", error);
    res.status(500).json({ message: 'Error saving data' });
  }
});

// Route to handle create form submission
app.post('/api/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const existingUser = await LoginModel.findOne({ email });

    if (!existingUser) {
      return res.status(404).json({ message: 'User is not found!' });
    }

    const matchPassword = await bcrypt.compare(password, existingUser.password)

    if (!matchPassword) {
      return res.status(401).json({ message: 'Passwords do not match' });
    }

    res.status(200).json({ message: 'Login successful', existingUser });
  } catch (error) {
    console.log("Error logging in (server):", error);
    res.status(500).json({ message: 'Error logging in (server)' });
  }
});

app.post('/api/update', async (req,res) => {
  try {
   
      const { email, password } = req.body;
     
      const existingUser = await LoginModel.findOne({ email });

      if (!existingUser) {
      return res.status(404).json({ message: 'User is not found!' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await existingUser.updateOne({password: hashedPassword});
    

    res.status(200).json({ message: 'User password updated successfully' });
    





      
  } catch (error) {
    console.log(error);
  }
});


//this sends the current highscore
app.post('/api/gethighscore', async (req, res) => {
  try{
    console.log("request recieved.")
    const {email} = req.body;
    const existingUser = await LoginModel.findOne({ email });
    const currentHighscore =  existingUser.highScore;
     res.status(200).json({  highScore: currentHighscore });

  }
  catch(error){
    console.log(error);
  }
})

//this checks if the highscore is beaten
app.post('/api/highscore', async (req, res) => {
  try{
    const {highScore, email} = req.body;
    
    
    const existingUser = await LoginModel.findOne({ email });

     if (!existingUser) {
      // If user doesn't exist, return an appropriate response
      return res.status(404).json({ message: 'User not found' });
    }

    

    if(existingUser.highScore > highScore){
      existingUser.highScore = highScore;
    }
    
    
    await existingUser.save();
      res.status(200).json({success: true});

  }
  catch(error){
    console.log(error);
  }
})

app.post('/api/forgot', async (req, res) => {
  try {
    const {email} = req.body;
    
    const existingUser = await LoginModel.findOne({ email });

    const randomNumber = Math.floor(100000 + Math.random() * 900000);

    existingUser.code = randomNumber;

    await existingUser.save();

    let transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: 'mentalifyfyp@gmail.com', // Your email address
        pass: 'uyge ktyq ndjg zbyw' // Your email password
      }
    });

    // Email content
    let mailOptions = {
      from: 'Mentalify <mentalifyfyp@gmail.com>',
      to: email,
      subject: 'Welcome to Mentalify',
      text: `To ${existingUser.firstName},

Your one-time code to reset your password as requested:

 ${randomNumber}

Warm regards,
The Mentalify Team`
    };
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent:", info.response);
    res.status(200).send("worked");



    
  } catch (error) {
    console.log(error);
  }
})

app.post("/api/check", async (req, res) => {
  try {
    const { code, email } = req.body;
   
    const existingUser = await LoginModel.findOne({ email });
  

    if (existingUser.code.toString() === code) {
      res.sendStatus(200);
      
    } else {
      res.status(400).json({ message: "Codes don't match!" });
    }
  } catch (error) {
    // Handle errors appropriately
    console.error("Error:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

app.post("/api/news", async (req, res) => {
  try {
    const { newsletter } = req.body;

    // Fetch email addresses from the database
    const emails = await LoginModel.find({}, 'email');

    // Extract email addresses from the documents
    const emailAddresses = emails.map(login => login.email);

    // Create nodemailer transporter
    let transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: 'mentalifyfyp@gmail.com', // Your email address
        pass: 'uyge ktyq ndjg zbyw' // Your email password
      }
    });

    // Send email to each recipient
    for (const login of emails) {
      const mailOptions = {
        from: 'Mentalify <mentalifyfyp@gmail.com>',
        to: login.email,
        subject: 'Newsletter',
        text: newsletter
      };

      try {
        const info = await transporter.sendMail(mailOptions);
        console.log("Email sent:", info.response);
      } catch (error) {
        console.error("Error sending email:", error);
        // Continue to next recipient even if an error occurs
      }
    }

    // Send response after all emails have been sent
    res.status(200).json({ message: "Newsletter sent to all recipients." });

  } catch (error) {
    // Handle errors appropriately
    console.error("Error:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});


// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
