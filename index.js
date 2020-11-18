const express = require("express");
const connectDB = require("./config/db");

const app = express();

// connect to DB 
connectDB();

// Lets accept json data in the API 
app.use(express.json({extended: false}));

// Define Routes 
app.use("/", require("./routes/index"));
app.use("/api/url", require("./routes/url"));

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})