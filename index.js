require("dotenv").config();

const express = require("express");
const app = express();

app.use(express.static("public"));
app.use("/api/get/", require("./routes/get"));

app.listen(process.env.PORT);
