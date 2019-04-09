"use strict";

const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => res.send("Initial response."));

app.listen(port, () => console.log(`Main app is listening on port ${port}`));