import { entregador } from "../fixtures/factories/entregador"

describe('Cadastrar 1 entregador com sucesso', () => {
  it('Validar cadastro de entregador', () => {

    cy.visit('https://buger-eats.vercel.app/')
    cy.get('a[href="/deliver"]').click()

    cy.get('input[name ="name"]').type(entregador.nome)
    cy.get('input[name ="cpf"]').type('70984267255')
    cy.get('input[type ="email"]').type(entregador.email)
    cy.get('input[name ="whatsapp"]').type(entregador.whatsapp)

    cy.get('input[name ="postalcode"]').type('02040-070')
    cy.get('input[value="Buscar CEP"]').click()
    cy.get('input[name="address-number"]').type(entregador.endereco.numero)
    cy.get('input[name ="address-details"]').type('N/A')

    cy.get('img[alt="Moto"]').click()

    cy.get('input[accept^="image"]').attachFile(`/images/${entregador.cnh}`)

    cy.get('button[type="submit"]').click()

    cy.get('div[id="swal2-html-container"]').should('have.text', "Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.")
    cy.get('div .swal2-actions button[class="swal2-confirm swal2-styled"]').click()
  })
})