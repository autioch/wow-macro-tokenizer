const request = require('request');
const Bluebird = require('bluebird');
const qbLog = require('qb-log');

const BASE_URL = '-twinhead.twinstar.cz/?spells=';

function parseResponse(err, response, body, url) {
  if (err) {
    return {
      err: err.message
    };
  }

  if (response.status < 200 || response.status > 299) { // eslint-disable-line no-magic-numbers
    return {
      err: `Invalid response status ${response.status} ${url}`
    };
  }

  if (!body.length) {
    return {
      err: `Missing body for ${url}`
    };
  }

  return {
    body
  };
}

module.exports = function fetchSpells(expansion, categoryId) {
  const uri = `https://${expansion}${BASE_URL}${categoryId}`;

  qbLog.info(uri);

  return Bluebird
    .delay(1000) // eslint-disable-line no-magic-numbers
    .then(() => new Bluebird((resolve, reject) => {
      request({
        uri
      }, (err, response, body) => {
        const parsed = parseResponse(err, response, body, uri);

        if (parsed.body) {
          resolve(parsed.body);
        } else {
          reject(parsed.err);
        }
      });
    }));
};
