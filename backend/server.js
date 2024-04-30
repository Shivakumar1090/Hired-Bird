const express = require("express");
const cors = require("cors");
const ConnectDB = require("./db/conn");

const app = express();

require("dotenv").config();
const port = process.env.PORT || 5000;

//images
// app.use(express.static("./uploads"));

// for parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

//json
app.use(express.json({ extended: false }));
app.use(cors());

// Mongoose Database connection
ConnectDB();

app.use("/candidate/auth", require("./routes/user/auth"));
app.use("/candidate/education", require("./routes/user/education"));
app.use("/candidate/projects", require("./routes/user/projects"));
app.use("/candidate/workexp", require("./routes/user/workexp"));
app.use("/candidate/profile", require("./routes/user/profile"));

app.use("/company/auth", require("./routes/company/auth"));
app.use("/company/profile", require("./routes/company/auth"));

app.listen(port, () => {
  console.log(`Server started on port ${port}!`);
});
