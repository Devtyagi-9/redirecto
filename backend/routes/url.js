const express = require("express");
const router = express.Router();
const { handleGenerateNewShortURL, extractRedirectURL, extractURLAnalytics } = require("../controllers/urlcontroller")



// Route to create shortID
// Request header: http://localhost:3004/url
// Request Body 
// {
//   "url":"https://devtyagi-9.github.io/"
// }

// Response
// {
//   "id": "ZTkVjrySj"
// }

router.post("/", handleGenerateNewShortURL);

// Route to open the redirectURL
// Request header
// http://localhost:3004/url/ZTkVjrySj
router.get("/:id", extractRedirectURL)

// Route to get Analytics
// Request header
// http://localhost:3004/url/analytics/ZTkVjrySj
// Response
// {
//   "message": "Analytics fetched successfully",
//   "total visits": 0,
//   "Detailed Analysis": []
// }
router.get("/analytics/:id", extractURLAnalytics)

module.exports = router;
