const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/:url", async (req, res) => {
  const url = req.params.url;
  const response = await axios.get(url);
  res.json(response);
});

module.exports = router;
