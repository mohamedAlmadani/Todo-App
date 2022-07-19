/// <reference types="cypress" />

describe('should check all the functionalities of the todos page',()=>{
    beforeEach(()=>{
        localStorage.setItem(
            'user',
            '{"access_token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYzU4MGEzMjFjNjgxMmY1NWQwZTZkYyIsImZpcnN0TmFtZSI6ImFiY2QiLCJsYXN0TmFtZSI6ImFiY2QiLCJpYXQiOjE2NTcxMTQxMjZ9.CvrpwVGcKFc2RhmDksEhECIr5sY3mC1TOaoAJc4NVME","userID":"62c580a321c6812f55d0e6dc","firstName":"abcd"}'
        );
        cy.intercept('GET','**/api/v1/tasks',{
            fixture:'tasks',

        });
        cy.intercept('POST','**/api/v1/tasks',{}).as('newTask');
        cy.visit('/todo');
        cy.get('.sc-idiyUo > .MuiButtonBase-root').click();
       
    })
    it('should navigate to Todos page ',()=>{
        cy.url().should('contain','/todo/new');
     
       

      
        

        
    })
    it.only('should show an error if the task is less than 3 charachters ',()=>{
      
        cy.get('[data-testid="new-todo"]').type('a');
        cy.get('[data-testid="submit-newTask"]').click();
        cy.contains('it should be more than 3 characters').should('be.visible');

     
       

      
        

        
    })
    it.only('should send the correct data to the server ',()=>{
      
        cy.get('[data-testid="new-todo"]').type('Learn Appium');
        cy.get('[data-testid="submit-newTask"]').click();
       

     cy.wait('@newTask').then(xhr=>{
        expect(xhr.request.body.item).to.eq('Learn Appium');
     })
       

      
        

        
    })

})