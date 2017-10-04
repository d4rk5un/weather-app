const request = require('request');

var getWeather = (lat, lng, callback) => {
  request({
    url: `https://api.darksky.net/forecast/1d653fcc1eed45e7531bd3c9ffa0b3cc/${lat},${lng}`,
    json: true
  }, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      callback(undefined, {
        temperature: body.currently.temperature,
        actualTemp: body.currently.apparentTemperature
      });
    } else {
      callback('Unable to fetch weather.')
    }
  });
};

module.exports.getWeather = getWeather;
