const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const adminProjectRouter = require("./routes/admin/project-routes");
require("dotenv").config();

mongoose
  .connect(process.env.DB_URL)
  .then(console.log("Mongoose Connected"))
  .catch((err) => console.log(err));

const PORT = process.env.PORT || 5000;
const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "DELETE", "PUT"],
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "Cache-Control",
      "Expires",
      "Pragma",
    ],
    credentials: true,
  })
);

app.use(cookieParser());
app.use(express.json());

app.use("/api/admin/project", adminProjectRouter);
app.listen(5000, () => console.log(`Server running on port ${PORT} `));
