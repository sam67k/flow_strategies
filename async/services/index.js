const fetchTitle = require("../utils/fetchTitle");
const async = require("async");

const fetchTitles = (addresses, callback) => {
  async.map(
    addresses,
    (address, cb) => {
      fetchTitle(address).then((result) => cb(null, result));
    },
    (err, results) => {
      callback(results);
    }
  );
};

module.exports = fetchTitles;
