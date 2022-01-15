const express = require("express");
const router = express.Router();
const shortenUrlController = require("../controllers/shortenUrlController");

router.post("/generateTinyUrl", shortenUrlController.shortenUrl);

module.exports = router;
