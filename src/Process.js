class Process {
  static Process(data) {
    var rawLines = data.split('\r\n');
    var rows = []
    rawLines.forEach(raw => {
      rows.push(raw.split(','))
    })

    return rows
  }
}


module.exports = Process;
