const fs = require('fs');
const util = require('util');

class Writer {
  constructor() {
    this.writer = util.promisify(fs.writeFile)
  }

  Write(filename, data) {
    this.writer(filename, data).then((data) => {
      return true;
    }).catch((error) => {
      console.log(error)
      return false;
    })
  }
}

module.exports = new Writer();
