const https = require("http");
const config = require("../config/config");
var request = require("request");

function applyFabricToken() {
  return new Promise((resolve, reject) => {
    var options = {
      method: "POST",
      url: config.baseUrl + "/payment/v1/token",
      headers: {
        "Content-Type": "application/json",
        "X-APP-Key": config.fabricAppId,
      },
      rejectUnauthorized: false, //add when working with https sites
      requestCert: false, //add when working with https sites
      agent: false, //add when working with https sites
      body: JSON.stringify({
        appSecret: config.appSecret,
      }),
    };
    console.log(options);
    request(options, function (error, response) {
      if (error) throw new Error(error);
      // console.log("***********");
      console.log("BODY", response.body);
      // console.log(typeof response.body);
      let result = JSON.parse(response.body);
      // console.log(result);
      // console.log("*****************");
      resolve(result);
    });
  });
}

module.exports = applyFabricToken;
