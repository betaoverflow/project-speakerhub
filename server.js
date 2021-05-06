const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const cors = require('cors');

const users = require("./routes/api/users");

const app = express();

app.get('/', (req, res) =>
{
   res.send("<h1>Kya bolti public🔥🔥</h1>") 
});

// Bodyparser middleware
app.use(express.json());

app.use(cors());
app.options('*', cors());
// DB Config
const db = require("./config/keys").mongoURI;

// Connect to MongoDB
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());



// Passport config
require("./config/passport")(passport);

// Routes
app.use("/api/users", users);

const port = 5000;

app.listen(port, () => console.log(`Server up and running on port ${port} !`));
