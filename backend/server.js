const express = require("express");
const app = express();
const env = require('dotenv');
env.config()
const PORT = process.env.PORT || 3000;

app.get("/" , (req, res) => {
  res.send("Working")
})

app.listen(PORT, ()=> {
  console.log("Server listening on PORT: ", PORT);
})
