/// <reference types='cypress' />

describe("Teste para agenda de contatos", () => {
    beforeEach(() => {
        cy.visit("https://agenda-contatos-react.vercel.app/");
    });
    //TESTE DE ADIÇÃO
    it("Deve adicionar primeiro contato", () => {
        cy.get('input[type="text"]').type("Fulano Alguma Coisa");
        cy.get('input[type="email"]').type("fulano@gmail.com");
        cy.get('input[type="tel"]').type("00987654321");
        cy.contains("Adicionar").click();
        cy.screenshot("teste-adição");
    });
    it("Deve adicionar segundo contato", () => {
        cy.get('input[type="text"]').type("Fulano Alguma Coisa");
        cy.get('input[type="email"]').type("fulano@gmail.com");
        cy.get('input[type="tel"]').type("00987654321");
        cy.contains("Adicionar").click();
        cy.screenshot("teste-adição");
    });
    //TESTE DE EDIÇÃO
    it("Deve alterar segundo contato", () => {
        cy.get(":nth-child(2) > .sc-gueYoa > .edit").click();
        cy.get('input[type="text"]').clear().type("Ciclano Outro");
        cy.get('input[type="email"]').clear().type("ciclano@yahoo.com.br");
        cy.get('input[type="tel"]').clear().type("00123456789");
        cy.get(".alterar").click();
        cy.screenshot("teste-editar");
    });
    //TESTE DE REMOÇÃO
    it("Deve remover todos os contatos", () => {
        cy.get(".delete").click({multiple:true});
        cy.screenshot("teste-remover");
    });
});