const router = require('express').Router()
const db = require("../models")

const { Book, User, UserFavorite } = db

// SHOW
router.get('/:profileId', async (req, res) => {
    let profileId = Number(req.params.profileId)
    if (isNaN(profileId)) {
        res.status(404).json({ message: `Invalid id "${profileId}"` })
    } else {
        const profile = await Profile.findOne({
            where: { profileId: profileId },
            // include: {
            //     association: 'userFavorite',
            //     include: 'user'
            // }
        })
        if (!profile) {
            res.status(404).json({ message: `Could not find place with id "${profileId}"` })
        } else {
            res.json(profile)
        }
    }
})

//   userFavorite controller

module.exports = router