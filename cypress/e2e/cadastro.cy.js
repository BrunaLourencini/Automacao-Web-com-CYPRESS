
describe ('Cadastrar 1 entregador com sucesso', () => {
    it ('Validar cadastro de entregador', () => {

        //Home
        cy.visit('https://buger-eats.vercel.app/')
        cy.get('a[href="/deliver"]').click()
        
        //Dados
        cy.get('input[name ="name"]').type('Bruna Lourencini')
        cy.get('input[name ="cpf"]').type('70984267255')
        cy.get('input[type ="email"]').type('bruteste@yahoo.com')
        cy.get('input[name ="whatsapp"]').type('14999999999')
        
        //Endereço
        cy.get('input[name ="postalcode"]').type('02040-070')
        cy.get('input[value="Buscar CEP"]').click()
        cy.get('input[name="address-number"]').type('9870')
        cy.get('input[name ="address-details"]').type('N/A')


        //Método Entrega
        cy.get('img[alt="Moto"]').click()
    

        //CNH
        cy.get('input[accept^="image"]').attachFile('/images/habilitacao.jpg')
        

        //Cadastrar
        cy.get('button[type="submit"]').click()

        //Validação mensagem
        cy.get('div[id="swal2-html-container"]').should('have.text', "Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.")
        cy.get('div .swal2-actions button[class="swal2-confirm swal2-styled"]').click()

    })
})