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
       
    })
    it('should show the not completed task correctly ',()=>{
     
        cy.visit('/todo');
        cy.get('[data-testid="todo-item"]').first().should('have.css','background-color','rgb(63, 81, 181)');

        cy.get('[data-testid="complete-task"]').first().should('not.have.attr','checked',);

      
        

        
    })
    it('should show the  completed task correctly ',()=>{
     
        cy.visit('/todo');
        cy.get('[data-testid="todo-item"]').last().should('have.css','background-color','rgb(33, 76, 97)');

        cy.get('[data-testid="complete-task"]').last().should('have.attr','checked');


      
        

        
    })

    it.only('should show the pagintion if the number of tasks is more than 5 ',()=>{
     

        cy.intercept('GET','**/api/v1/tasks',{
            fixture:'taskspagination',

        });
        cy.visit('/todo');
        cy.get('[data-test-id="pagination-link"]').should('be.visible').and('have.length',2);


      
        

        
    })

})