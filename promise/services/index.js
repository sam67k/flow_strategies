const fetchTitle = require("../utils/fetchTitle");

const fetchTitles = (addresses) => {
  return Promise.all(addresses.map((address) => fetchTitle(address)));
};

module.exports = fetchTitles;
