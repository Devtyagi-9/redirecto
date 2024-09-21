const express = require("express");
const app = express();
const env = require('dotenv');
env.config()
const PORT = process.env.PORT || 3000;
const { connectToMongoDB } = require("./connect")

connectToMongoDB(process.env.MONGODB_URL)
.then(()=> {
  console.log("DB connection established")
})
app.use(express.json())
const URLRoutes = require("./routes/url")
app.use("/url", URLRoutes);

// app.get("/" , (req, res) => {
//   res.send("Working")
// })

app.listen(PORT, ()=> {
  console.log("Server listening on PORT: ", PORT);
})
