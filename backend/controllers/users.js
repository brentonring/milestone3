const router = require("express").Router();
const db = require("../models");
const bcrypt = require("bcrypt");

const { User } = db;

router.post("/", async (req, res) => {
  let { password, ...rest } = req.body;
  const user = await User.create({
    ...rest,
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