const router = require("express").Router();
const db = require("../models");
const bcrypt = require("bcrypt");

const { User } = db;
// console.log(db)

router.post("/", async (req, res) => {
  let { password, ...data } = req.body;
  // console.log(rest)
  const user = await User.create({
    ...data,
    passwordDigest: await bcrypt.hash(password, 10),
  });
  res.json(user);
});

// FIND ALL USERS
router.get("/", async (req, res) => {
    try {
        const foundUsers = await User.findAll();
        res.status(200).json(foundUsers)
    } catch (error) {
        res.status(500).json(error)
    }
  
});

module.exports = router;