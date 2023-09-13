const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const fs = require('fs');
const path = require('path');
const Reportroutes = require('./routes/Report-Routes');
app.use(bodyParser.json());
app.use('/uploads/images', express.static(path.join('uploads', 'images')));
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, PATCH, DELETE, OPTIONS"
    );
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Content-Type, Authorization"
    );
    res.setHeader("Access-Control-Allow-Credentials", "true");
    if (req.method === "OPTIONS") {
      return res.sendStatus(200);
    }
    next();
  });
  app.use("/api/report", Reportroutes);
  mongoose
  .connect(
    "mongodb+srv://ananya:1234@cluster0.zl3ice3.mongodb.net/reports?retryWrites=true&w=majority"
  )
  .then(app.listen(4445))
  .catch((err) => {
    console.log(err);
  });