const express = require("express");
const api = express();
const bodyParser = require('body-parser')
const routes = require("./src/routes/routes")
const cors = require('cors');

// CORS middleware
api.use(cors());
const allowCrossDomain = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', '*');
  res.header('Access-Control-Allow-Headers', '*');
  next();
}
api.use(allowCrossDomain)

api.use(bodyParser.json());
api.use(bodyParser.urlencoded({extended: true}));
api.use("/", routes);


api.listen(8000, function () {
    console.log('Server listening on port 8000');
    });