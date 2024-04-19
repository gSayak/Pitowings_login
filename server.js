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

app.post("/login", async (req, res) => {
  // console.log(req.body.email);
  const user = await User.findOne({ email: req.body.email });
  // console.log(user);
  // console.log(user.name)
  // console.log(req.body.user);
  if (!user) return res.status(400).send("Email not found");

  if (req.body.password !== user.password)
    return res.status(400).send("Invalid password");

    const token = jwt.sign({ id: user._id, name: user.name }, process.env.SECRET_TOKEN);
    // console.log(user.name)
  res.json({ accessToken : token });
});

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

app.get('/home', authenticateToken, (req, res) => {
  res.send(`Hello, user ${req.user.name}`);
});

function authenticateToken(req, res, next){
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]
  if (token == null ) return res.sendStatus(401)

  jwt.verify(token, process.env.SECRET_TOKEN, (err, user) =>{
    if (err) return res.sendStatus(403)
    req.user = user
    console.log(user)
    next()
  })
}



app.listen(5000, () => console.log("Server running on port 5000"));

// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {
//   console.log('Connected to MongoDB');
// });

