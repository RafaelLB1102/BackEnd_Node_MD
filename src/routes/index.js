const EXPRESS = require("express");
const USER_ROUTES = require("./user");

const ROUTES_APP = (APP) => {
  const ROUTES = EXPRESS.Router();
  APP.use("/api/v1", ROUTES);
  ROUTES.use("/customers", USER_ROUTES);
};

module.exports = ROUTES_APP;
