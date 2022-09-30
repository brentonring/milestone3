const router = require('express').Router()
const db = require("../models")

const { Book, User, UserFavorite } = db

// INDEX
router.get('/', async (req, res) => {
    const findUser = await db.User.find()
    try{
      res.status(200).json(findUser)
    }
    catch(err){
      console.log('err', err);
      res.status(500).json(err);
    }
  })

//   userFavorite controller

module.exports = router