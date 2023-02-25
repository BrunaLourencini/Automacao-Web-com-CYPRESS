
class Form {

  visit() {
    cy.visit('/')
  }

  acessarFormularioCadastro() {
    cy.get('a[href="/deliver"]').click()
  }

  cadastrarEntregador(entregador) {
    cy.get('input[name ="name"]').type(entregador.nome)
    cy.get('input[name ="cpf"]').type('70984267255')
    cy.get('input[type ="email"]').type(entregador.email)
    cy.get('input[name ="whatsapp"]').type(entregador.whatsapp)

    cy.get('input[name ="postalcode"]').type('02040-070')
    cy.get('input[value="Buscar CEP"]').click()
    cy.get('input[name="address-number"]').type(entregador.endereco.numero)
    cy.get('input[name ="address-details"]').type('N/A')

    cy.get('img[alt="Moto"]').click()
  }

  uploadCnh(cnh) {
    cy.get('input[accept^="image"]').attachFile(`/images/${cnh}`)
  }

  concluirCadastro() {
    cy.get('button[type="submit"]').click()
  }

  validacaoCadastroSucesso(menssagem) {
    cy.get('div[id="swal2-html-container"]').should('have.text', menssagem)
    cy.get('div .swal2-actions button[class="swal2-confirm swal2-styled"]').click()

  }
}

export default new Form