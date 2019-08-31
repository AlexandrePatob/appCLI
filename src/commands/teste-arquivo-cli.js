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
      
    } else {
      print.error(`Digite o nome e a senha corretos!`)
    }
  }
}
