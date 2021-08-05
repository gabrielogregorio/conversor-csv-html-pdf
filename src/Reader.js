const fs = require('fs');
const util = require('util');

// var novaFuncaoComPromisse = util.promisify(funcaoVelhaComCallback)
class Reader {
  constructor() {
    this.reader = util.promisify(fs.readFile);
  }

  async Read(filepath) {
    try {
      return await this.reader(filepath,{encoding: 'utf-8'})
    } catch(erro) {
      console.log(error)
      return undefined
    }
  }
}

module.exports = new Reader()
