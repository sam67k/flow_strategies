const fetchTitle = require("../utils/fetchTitle");

const fetchTitles = (addresses, callback) => {
  let results = [];
  let completedRequests = 0;

  addresses.forEach((address) => {
    fetchTitle(address).then((result) => {
      results.push(result);
      completedRequests++;
      if (completedRequests === addresses.length) {
        callback(results);
      }
    });
  });
};

module.exports = fetchTitles;
