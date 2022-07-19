/// <reference types="cypress" />
describe('login functionlity test case',()=>{
    beforeEach(()=>{
        cy.fixture('vaildUser').as('user');
    })
    it.only('should be able to login with valid email and passeaord',()=>{
        cy.viewport('macbook-13');
        cy.visit('/'),
        cy.get('@user').then((user) =>{
            cy.get('[type="email"]').type(user.email);
            cy.get('[type="password"]').type(user.password);
        });
      
        cy.get('span').contains('Login').click();
        cy.url().should('contain','/todo');

        
    })
})


///// read and write
describe('login functionlity test case',()=>{
    beforeEach(()=>{
        cy.writeFile('cypress/fixtures/testdata.json',{
            username:'test@gmail.com',
            password:'Test123!'
        })
    })
    it('should be able to login with valid email and passeaord',()=>{
        cy.viewport('macbook-13');
        cy.visit('/'),
        cy.readFile('cypress/fixtures/testdata.json').then((user) =>{
            cy.get('[type="email"]').type(user.username);
            cy.get('[type="password"]').type(user.password);
        });
      
        cy.get('span').contains('Login').click();
        cy.url().should('contain','/todo');

        
    })
})