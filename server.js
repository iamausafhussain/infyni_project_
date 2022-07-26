const app = require("./app");
const dotenv = require("dotenv");
const connectDatabase = require("./config/database");

//config
dotenv.config({ path: "config/config.env" });

//connect connectDatabase
connectDatabase();

app.listen(process.env.PORT, () => {
  console.log(
    `Server is listening on port http://localhost:${process.env.PORT}`
  );
});
