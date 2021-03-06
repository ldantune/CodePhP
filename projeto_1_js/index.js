const path = require('path')
const fn = require('./funcoes')

const caminho = path.join(__dirname, '.', 'legendas')

fn.lerDiretorio(caminho)
  .then(arquivos => fn.elementosTerminadosCom(arquivos, '.srt'))
  .then(arquivosSRT => fn.lerArquivos(arquivosSRT))
  .then(conteudos => conteudos.join('\n'))
  .then(todoConteudo => todoConteudo.split('\n'))
  .then(console.log)
