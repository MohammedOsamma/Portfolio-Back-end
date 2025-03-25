const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors");
require("dotenv").config();

mongoose
  .connect(process.env.DB_URL)
  .then(console.log("Mongoose Connected"))
  .catch((err) => console.log(err));

const PORT = process.env.PORT || 5000;
const app = express();

app.use(
  cors({
    origin: "",
    methods: ["GET", "POST", "DELETE", "PUT"],
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "Cache-Control",
      "Expires",
      "Pragma",
    ],
    withCredintal: true,
  })
);

app.use(cookieParser);
app.use(express.json());

app.listen(PORT, () => console.log(`Server running on port ${PORT} `));
