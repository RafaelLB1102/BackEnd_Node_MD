const EXPRESS = require("express");
const MONGOOSE = require("mongoose");
const APP = EXPRESS();
const PORT = 4000;
const ROUTES_APP = require("./src/routes");

require("dotenv").config();

APP.listen(PORT, () => {
  console.log(`Now is in the port ${PORT}`);
});

MONGOOSE.set("strictQuery", false);

MONGOOSE.connect(process.env.STRING_CONNECTION)
  .then(() => console.log("Sucess conection"))
  .catch((err) => console.log(err));

APP.use(EXPRESS.json());
ROUTES_APP(APP);
