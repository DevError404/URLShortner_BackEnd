const shortenUrlService = require("../services/shortenUrlService");
const responseGenerator = require("../utils/responseGenerator");
const validUrl = require("valid-url");
const message = require("../utils/messages");

exports.shortenUrl = (req, res) => {
  const { longUrl } = req.body;
  //check if url is valid or not
  if (validUrl.isUri(longUrl)) {
    shortenUrlService
      .shortUrl(longUrl)
      .then((result) => {
        res.send(
          responseGenerator.getResponse(200, message.Successful, true, [result])
        );
      })
      .catch((err) => {
        res.send(
          responseGenerator.getResponse(503, message.ServerError, false, [err])
        );
      });
  } else {
    res.send(responseGenerator.getResponse(401, message.InvaidUrl, true, []));
  }
};
