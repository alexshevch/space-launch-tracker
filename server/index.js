"use strict";

const express = require("express");
const cors = require('cors');
const app = express();

// Initialize startup variables
const [, , PORT, ENV] = process.argv;

const port = PORT || 3000;

// Do not allow global cross-origin in production
if (ENV !== "production") {
    app.use(cors());
}

// Initialize routes
require("./routes")(app);

// Start listening on port PORT
app.listen(port, () => console.log(`Main app is listening on port ${port}`));