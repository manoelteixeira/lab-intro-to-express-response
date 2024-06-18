const dotenv = require("dotenv");
const app = require("./app");

dotenv.config(); // Read environmental variables from the .env file

const PORT = process.env.SERVER_PORT;

// Create a listener - run the server
app.listen(PORT, () => {
  console.log(
    `Server is running on port 4001. \nlink: http://localhost:${PORT} `
  );
});
