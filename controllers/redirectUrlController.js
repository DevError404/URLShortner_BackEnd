const redirectUrlService = require("../services/redirectUrlService");
const messages = require("../utils/messages");
const responseGenerator = require("../utils/responseGenerator");
const message = require("../utils/messages");

exports.redirectToUrl = async (req, res) => {
  const code = req.params.code;

  redirectUrlService
    .redirectUrl(code)
    .then((result) => {
      console.log(result);
      return res.redirect(result.longUrl);
    })
    .catch((err) => {
      res.send(
        responseGenerator.getResponse(503, message.ServerError, false, [err])
      );
    });
};
