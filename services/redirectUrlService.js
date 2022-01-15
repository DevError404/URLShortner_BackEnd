const Url = require("../models/Url");
const message = require("../utils/messages");
const config = require("config");

exports.redirectUrl = async (code) => {
  try {
    const url = await Url.findOne({ urlCode: code });
    if (url) {
      return { longUrl: url.longUrl };
    } else {
      return { message: message.UrlNotFound };
    }
  } catch (err) {
    console.error(err.message);
    return { error: err.message };
  }
};
