const express = require("express");
const router = express.Router();
const { handleGenerateNewShortURL } = require("../controllers/urlcontroller")



// route to create shortURL

router.post("/", handleGenerateNewShortURL);

module.exports = router;
