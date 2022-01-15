const shortid = require("shortid");
const config = require("config");

const Url = require("../models/Url");

exports.shortUrl = async (longUrl) => {
  const urlCode = shortid.generate();
  const baseUrl = config.get("baseURI");

  try {
    //Check if its present in Database
    let url = await Url.findOne({ longUrl });

    if (url) {
      return url;
    } else {
      const shortUrl = baseUrl + "/" + urlCode;

      url = new Url({
        longUrl,
        shortUrl,
        urlCode,
        date: new Date(),
      });

      await url.save();

      return url;
    }
  } catch (err) {
    console.error(err.message);
    return { error: err.message };
  }
};
