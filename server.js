const dotenv = require("dotenv");
const app = require("./app");
const connectDB = require("./config/db");

dotenv.config();

// Connect Database

connectDB();

const PORT = process.env.port;

const server = app.listen(PORT, () => {
	console.log(`App has started on port ${PORT}`);
});
