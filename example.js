const csv = require('./csv2')


async function example() {
  // Ler o arquivo
  await csv.Read('./teste.csv')
  // Adicionar items no array
  await csv.Push(['item2', 'item11', 'item444', '000'])

  // Converter para HTML e PDF
  await csv.ToPdf()
  await csv.ToHtml()
}

example()
