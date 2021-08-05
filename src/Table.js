class Table {
  constructor(rows) {
    this.header = rows[0];
    rows.shift()
    this.rows = rows
  }

  get RowCount() { // Transforma o uso em algo similar a atributos
    return this.rows.length;
  }
  get ColumnCount() { // Transforma o uso em algo similar a atributos
    return this.header.length;
  }
}

module.exports = Table;
