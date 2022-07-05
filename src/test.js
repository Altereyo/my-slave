var fs = require('fs');

fs.writeFileSync('./db.json', '{"asd": 123}', () => console.log('SUCCESS'));