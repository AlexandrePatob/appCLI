const fs = require('fs')
const path = require('path')

module.exports = {
  name: 'teste-arquivo-cli',
  run: async toolbox => {
    const { print } = toolbox

    // aguardando texto/senha/option

    const askName = {
      type: 'input',
      name: 'nome',
      message: 'Nome:'
    }
    const askPassword = {
      type: 'password',
      name: 'senha',
      message: 'Senha:'
    }

    // Realiza a serie de Perguntas
    const questions = [askName, askPassword]
    const { nome, senha } = await toolbox.prompt.ask(questions)
    if (
      (nome == 'Marcela' && senha == 'Ma1234') ||
      (nome == 'Dev' && senha == 'Dev')
    ) {
      print.info(`Bem vinda ${nome}`)
      toolbox.print.success('Iniciando...')

      const askNumber = {
        type: 'input',
        name: 'numero',
        message: 'Quantos nomes quer trocar?'
      }

      const questNomeSenha = [askNumber]
      const { numero } = await toolbox.prompt.ask(questNomeSenha)
      print.info(`Vamos trocar ${numero} nomes!`)

      // Abrir arquivo .text / .doc
      const caminho = path.join(__dirname, '..', 'document', 'teste.txt');
      const doc = path.join(__dirname, '..', 'document', 'testeDoc.doc');
      const arquivo = fs.readFileSync(doc, 'utf-8', function(err, data) {
        if (err) throw err
        console.log(data)
      })
      if(arquivo){
        print.success('Arquivo Aberto')
        print.success(arquivo) // Dados dentro do arquivo.
      }
      var result = arquivo.replace(/Olá/g, 'Oi');
      print.info(result)
      
    } else {
      print.error(`Digite o nome e a senha corretos!`)
    }
  }
}
