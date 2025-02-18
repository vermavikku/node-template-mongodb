const express = require('express');
const dotenv = require("dotenv");
dotenv.config();
const db = require("./src/config/db");
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
// const router = require("./src/routes/example.routes");

// Middleware
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(cors()); // enable CORS

// app.use("/v1",router);


const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Running on port ${port}`);
});
