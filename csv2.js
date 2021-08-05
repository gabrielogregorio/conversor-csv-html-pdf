var leitor = require('./src/Reader');
const process = require('./src/Process')
const Table = require('./src/Table');
const HtmlParser = require('./src/HtmlParser');
var WritePdf = require('./src/WritePdf');
const escritor = require('./src/Writer');

class Csv2 {
  constructor() {
    this.html = undefined
    this.table = undefined
  }

  async Read(filename_csv) {
    this.dados = await leitor.Read(filename_csv);
    let rows = process.Process(this.dados)
    this.table = new Table(rows);
  }

  async Push(array) {
    await this.table.rows.push(array)
  }

  async ToHtml() {
    this.html = await HtmlParser.Parse(this.table);
    await escritor.Write('src/tmp/' + Date.now().toString() + ".html", this.html)
  }

  async ToPdf() {
    this.html = await HtmlParser.Parse(this.table);
    await WritePdf.WriterPdf('src/tmp/' + Date.now().toString() + ".pdf", this.html);
  }
}



module.exports =  new Csv2();