const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const passport = require("passport");

// Load input validation
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");

// Load User model
const User = require("../../models/User");

router.get("/api", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch {
    res.json({ message: "Was not able to fetch data" });
  }
});

router.get(`/:id`, async (req, res) => {
  const val = req.params.id;

  try {
    const users = await User.find({ _id: `${val}` });
    res.json(users);
  } catch {
    res.json({ message: "Unable to get one data" });
  }
});

// @route POST api/users/register
// @desc Register user
// @access Public
router.post("/register", (req, res) => {
  // Form validation
  const pastTalks = req.body.past_talks;
  const { errors, isValid } = validateRegisterInput(req.body);

  // Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  User.findOne({ email: req.body.email }).then((user) => {
    if (user) {
      return res.status(400).json({ email: "Email already exists" });
    } else {
      console.log(req.body.profile_image);
      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        facebook: req.body.facebook,
        instagram: req.body.instagram,
        bio: req.body.bio,
        profession: req.body.profession,
        past_talks: pastTalks,
        company_name: req.body.company_name,
        profile_image: req.body.profile_image,
      });

      // Hash password before saving in database
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then((user) => res.json(user))
            .catch((err) => console.log(err));
        });
      });
    }
  });
});

// @route POST api/users/login
// @desc Login user and return JWT token
// @access Public
router.post("/login", (req, res) => {
  // Form validation

  const { errors, isValid } = validateLoginInput(req.body);

  // Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  const email = req.body.email;
  const password = req.body.password;

  // Find user by email
  User.findOne({ email }).then((user) => {
    // Check if user exists
    if (!user) {
      return res.status(404).json({ emailnotfound: "Email not found" });
    }

    // Check password
    bcrypt.compare(password, user.password).then((isMatch) => {
      if (isMatch) {
        // User matched
        // Create JWT Payload
        const payload = {
          id: user.id,
          name: user.name,
        };

        // Sign token
        jwt.sign(
          payload,
          keys.secretOrKey,
          {
            expiresIn: 31556926, // 1 year in seconds
          },
          (err, token) => {
            res.json({
              success: true,
              token: "Bearer " + token,
            });
          }
        );
      } else {
        return res
          .status(400)
          .json({ passwordincorrect: "Password incorrect" });
      }
    });
  });
});

//function to verify is user is logged in
//you can move this function in a seprate file if you want to
verifyAccessToken = (req, res, next) => {
  if (!req.headers["authorization"])
    return res.sendStatus(401).send({ err: "Login first" });
  const authHeader = req.headers["authorization"];
  const bearerToken = authHeader.split(" ");
  const token = bearerToken[1];
  if (token == undefined)
    return res.sendStatus(401).send({ err: "Login first" });

  jwt.verify(token, keys.secretOrKey, (err, payload) => {
    if (err) {
      console.log(err);
      const message =
        err.name === "JsonWebTokenError"
          ? "Unauthorized"
          : err.name === "TokenExpiredError"
          ? "You are logout.Please login again"
          : err.message;
      return res.sendStatus(401).send({ err: message });
    }
    console.log(payload);
    passport.authenticate("passport", { session: false })(req, res, () =>
      next()
    );
  });
};

// @route PUT api/users/
// @desc Update the user
// @access To users who have logged in
router.put("/", verifyAccessToken, (req, res) => {
  const pastTalks = req.body.past_talks;
  const { errors, isValid } = validateRegisterInput({
    ...req.body,
    password: "123456", //not needed
    password2: "123456",//not needed
  });

  // Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  User.findOneAndUpdate(
    { email: req.body.email },
    {
      name: req.body.name,
      email: req.body.email,
      facebook: req.body.facebook,
      instagram: req.body.instagram,
      bio: req.body.bio,
      profession: req.body.profession,
      past_talks: pastTalks,
      company_name: req.body.company_name,
      profile_image: req.body.profile_image,
    },
    { new: true }
  )
    .then((user) => {
      res.send({ user: user });
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500).send("Some error occured.Try again");
    });
});
module.exports = router;
