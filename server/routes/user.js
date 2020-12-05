const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  return res.send({ users: [{ id: 1, name: "Никита Глазков" }] });
});

router.get("/about", (req, res) => {
  return res.send({ description: "Другой роут" });
});

module.exports = router;
