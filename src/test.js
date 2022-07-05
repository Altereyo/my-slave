var fs = require('fs');
const logo = require('./assets/logo.png');

const file = fs.readFileSync(logo);
fs.writeFileSync('./db.json', '{"asd": 123}', () => console.log('SUCCESS'));