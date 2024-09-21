const shortid = require("shortid");
const URL = require("../models/url")


async function handleGenerateNewShortURL(req, res) {
  const body = req.body;
  if(!body.url) {
    return res.status(400).json({
      error: "URL is required"
    })
  }
  const shortID = shortid();

  await URL.create({
    shortID: shortID,
    redirectURL: body.url,
    visitedHistory:[]
  })

  return res.status(201).json({
    id: shortID
  })

}

async function extractRedirectURL(req, res) {
  const shortID = req.params.id;
  const entry = await URL.findOneAndUpdate({
      shortID
  } , { $push: {
      visitHistory: {
          timestamp: Date.now()
        }
      }
    }
  )

  res.redirect(entry.redirectURL);
  

}

async function extractURLAnalytics(req, res) {
  const shortID = req.params.id;
  const result = await URL.findOne({
    shortID
  });

  res.status(200).json({
    "message" : "Analytics fetched successfully",
    "total visits" : result.visitHistory.length,
    "Detailed Analysis" : result.visitHistory
  })
}

module.exports = {
  handleGenerateNewShortURL,
  extractRedirectURL,
  extractURLAnalytics
}