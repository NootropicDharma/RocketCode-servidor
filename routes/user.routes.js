const router = require("express").Router();
const User = require("../models/User.model")

router.get("/users", (req, res, next) => {
    User.find()
        .then(allUsers => {
            res.json({users: allUsers})
        })
        .catch(error => console.log("error", error))
});

router.post("/users", (req, res) => {
    User.create(req.body)
        .then(newUser => {
            res.json(newUser)
        })
        .catch(error => console.log("error", error))
})

module.exports = router;