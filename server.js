const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const multer = require("multer");
const cors = require('cors');

const users = require("./routes/api/users");
const app = express();

app.get('/', (req, res) => {
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

//configure multer to store files in the server
const fileStorageEngine = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./client/public/fileUploads/profilePics")
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "--" + file.originalname);
  }
})

//Set up  Multer middleware
const upload = multer({ storage: fileStorageEngine });

app.post("/single", upload.single("profileImage"), (req, res) => {
  console.log(req.file);
  res.send((req.file.path).substring(13));
});