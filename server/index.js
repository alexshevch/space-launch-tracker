"use strict";

const express = require("express");
const app = express();

// Initialize startup variables
const [, , PORT] = process.argv;

const port = PORT || 3000;

// Initialize routes
require("./routes")(app);

// Start listening on port PORT
app.listen(port, () => console.log(`Main app is listening on port ${port}`));