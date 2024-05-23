const http = require("http");
const https = require("https");

const fetchTitle = (address) => {
  return new Promise((resolve) => {
    const reqUrl = address.startsWith("http") ? address : `http://${address}`;
    const lib = reqUrl.startsWith("https") ? https : http;

    lib
      .get(reqUrl, (response) => {
        let data = "";
        response.on("data", (chunk) => {
          data += chunk;
        });
        response.on("end", () => {
          const match = data.match(/<title>(.*?)<\/title>/);
          const title = match ? match[1] : "NO RESPONSE";
          resolve({ address, title });
        });
      })
      .on("error", () => {
        resolve({ address, title: "NO RESPONSE" });
      });
  });
};

module.exports = fetchTitle;
