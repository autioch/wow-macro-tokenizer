const fs = require('fs');

module.exports = fs.readFileSync(__dirname + '/all.ne', 'utf8');
