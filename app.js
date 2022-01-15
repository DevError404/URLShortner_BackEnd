const express = require("express");
const swaggerUI = require("swagger-ui-express");
const swaggerDoc = require("./swagger-doc/api-doc.json");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

// Initialize Express
const app = express();
app.use(cors());
// Initialize JSON body parser
app.use(express.json());
app.use("/", require("./routes/redirectRoutes"));
app.use("/api/url", require("./routes/genUrlRoutes"));
//swagger file path
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDoc));

module.exports = app;
