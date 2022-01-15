const express = require("express");
const router = express.Router();

const redirectUrlController = require("../controllers/redirectUrlController");

router.get("/:code", redirectUrlController.redirectToUrl);

module.exports = router;
