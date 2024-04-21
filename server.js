const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const jwt = require('jsonwebtoken')
// const bcrypt = require('bcrypt');
require("dotenv").config();


const app = express();

app.use(cors());
app.use(bodyParser.json());

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const userSchema = new mongoose.Schema({
  email: String,
  password: String,
  name: String,
});

const User = mongoose.model("user_details", userSchema);

//Login Code

app.post("/login", async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(400).send("Email not found");

  if (req.body.password !== user.password)
    return res.status(400).send("Invalid password");

    const token = jwt.sign({ id: user._id, name: user.name }, process.env.SECRET_TOKEN);
    // console.log(user.name)

  res.send({ token });
});

//SignUp Code

app.post('/signup', async (req, res) => {
  const user = new User({
    email: req.body.email,
    password: req.body.password,
  });

  try {
    await user.save();
    res.send('User registered successfully');
  } catch (err) {
    console.error(err);
    res.status(500).send('Error registering user');
  }
});


//Verification Codes for Authenticating JWT

app.get('/verify', authenticateToken, (req, res)=> {
  res.send({"name" : req.user.name})
})

function authenticateToken(req, res, next){
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]
  if (token == null ) return res.sendStatus(401)

  jwt.verify(token, process.env.SECRET_TOKEN, (err, user) =>{
    if (err) return res.sendStatus(403)
    if (user && user.name){
    req.user = user
    next()
  }else{
    res.sendStatus(403)
  }
  })
}



app.listen(5000, () => console.log("Server running on port 5000"));

// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {
//   console.log('Connected to MongoDB');
// });

