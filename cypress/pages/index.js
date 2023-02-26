import { elCadastro } from "./elementos"

class Form {

  visit() {
    cy.visit('/')
  }

  acessarFormularioCadastro() {
    cy.get(elCadastro.botaoCadastrarEntregar).click()
  }

  cadastrarEntregador(entregador) {
    cy.get(elCadastro.dadosNome).type(entregador.nome)
    cy.get(elCadastro.dadosCpf).type(entregador.cpf)
    cy.get(elCadastro.dadosEmail).type(entregador.email)
    cy.get(elCadastro.dadosWhatsapp).type(entregador.whatsapp)

    cy.get(elCadastro.enderecoCep).type(entregador.endereco.cep)
    cy.get(elCadastro.botaoBuscaCep).click()
    cy.get(elCadastro.enderecoNumero).type(entregador.endereco.numero)
    cy.get(elCadastro.enderecoComplemento).type(entregador.endereco.complemento)

    if (entregador.metodoEntrega == "Moto") {
    cy.get(elCadastro.metodoEntregaMoto).click()
    } else if (entregador.metodoEntrega == "Bicicleta") {
      cy.get(elCadastro.metodoEntregaBike).click()
    } else if (entregador.metodoEntrega == "Van/Carro") {
      cy.get(elCadastro.metodoEntregaCar).click()
    }
  }

  uploadCnh(cnh) {
    cy.get(elCadastro.uploadCnh).attachFile(`/images/${cnh}`)
  }

  concluirCadastro() {
    cy.get(elCadastro.botaoConcluirCadastro).click()
  }

  validacaoCadastroSucesso(menssagem) {
    cy.get(elCadastro.validacaoMenssagem).should('have.text', menssagem)
    cy.get(elCadastro.botaoFechar).click()

  }
}

export default new Form