const router = require("express").Router();
const User = require("./user.routes")

router.get("/", (req, res, next) => {
  res.json("All good in here");
});

router.use("/", User)

// You put the next routes here 👇
// example: router.use("/auth", authRoutes)

module.exports = router