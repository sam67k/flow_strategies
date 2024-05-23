const fetchTitles = require("../services");
const renderHTML = require("../utils/renderHTML");

module.exports = {
  get: (req, res, next) => {
    try {
      const {
        query: { address },
      } = req;

      if (!address) {
        res.status(400).send("<h1>Bad Request</h1>");
        return;
      }

      const addressList = Array.isArray(address) ? address : [address];

      fetchTitles(addressList, (results) => {
        res.status(200).send(renderHTML(results));
      });
    } catch (error) {
      next(error);
    }
  },
};
