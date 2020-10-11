const express = require('express');
const bodyParser = require("body-parser");
const fs = require('fs')

const app = express();

app.use(bodyParser.json());


app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PATCH, PUT, DELETE, OPTIONS"
    );
    next();
});

app.post("/api/save", (req, res, next) => {
    data = req.body;
    try {
        fs.writeFileSync("./backend/new.json", JSON.stringify(data))
        res.status(200).json({
            message: "saved"
        });
      } catch (err) {
        console.error(err)
        res.status(500).json({
            message: "error occured"
        });
      }
    
});

module.exports = app;