const router = require("express").Router();
const db = require("../models");
const bcrypt = require("bcrypt");

const { User } = db;
// console.log(db)

router.post("/", async (req, res) => {
  let { password, ...rest } = req.body;
  console.log(req.body)
  const user = await User.create({
    ...rest,
    password_digest: await bcrypt.hash(password, 10),
  });
  res.json(user);
});

// FIND ALL USERS
router.get("/", async (req, res) => {
    try {
        const users = await User.findAll();
        res.status(200).json(users)
    } catch (error) {
        res.status(500).json(error)
    }
  
});

module.exports = router;