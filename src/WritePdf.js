var pdf = require('html-pdf');

class WritePdf {
  static WriterPdf(filename, html) {
    pdf.create(html, {}).toFile(filename, (error) => {if (error) {console.log(error)}})
  }
}

module.exports = WritePdf;
