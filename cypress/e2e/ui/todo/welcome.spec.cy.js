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
        cy.visit('/todo');
    })
    it('should show time to sleep message',()=>{
        const now =new Date('February 12 ,2021 01:00:00');
        cy.clock(now);
        cy.visit('/todo');
        cy.get('[data-testid="welcome"]').should('contain.text','Time to sleep');
      
       
      
        

        
    });
    it('should show good morning message',()=>{
        const now =new Date('February 12 ,2021 09:00:00');
        cy.clock(now);
        cy.visit('/todo');
        cy.get('[data-testid="welcome"]').should('contain.text','Good morning');
      
       
      
        

        
    })

    it('should show good afternoon message',()=>{
        const now =new Date('February 12 ,2021 14:00:00');
        cy.clock(now);
        cy.visit('/todo');
        cy.get('[data-testid="welcome"]').should('contain.text','Good afternoon');
      
       
      
        

        
    })

    it('should show good evening message',()=>{
        const now =new Date('February 12 ,2021 20:00:00');
        cy.clock(now);
        cy.visit('/todo');
        cy.get('[data-testid="welcome"]').should('contain.text','Good Evening');
      
       
      
        

        
    })

    it('should  not show  the first name if there is no first name in the local storage',()=>{
        localStorage.setItem(
            'user',
            '{"access_token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYzU4MGEzMjFjNjgxMmY1NWQwZTZkYyIsImZpcnN0TmFtZSI6ImFiY2QiLCJsYXN0TmFtZSI6ImFiY2QiLCJpYXQiOjE2NTcxMTQxMjZ9.CvrpwVGcKFc2RhmDksEhECIr5sY3mC1TOaoAJc4NVME","userID":"62c580a321c6812f55d0e6dc"}'
        );
        cy.visit('/todo');
        cy.get('[data-testid="welcome"]').should('contain.text','user');

       
      
        

        
    })
    it.only('should  not show  the first name if  the first name is less than 2 letters',()=>{
        localStorage.setItem(
            'user',
            '{"access_token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYzU4MGEzMjFjNjgxMmY1NWQwZTZkYyIsImZpcnN0TmFtZSI6ImFiY2QiLCJsYXN0TmFtZSI6ImFiY2QiLCJpYXQiOjE2NTcxMTQxMjZ9.CvrpwVGcKFc2RhmDksEhECIr5sY3mC1TOaoAJc4NVME","userID":"62c580a321c6812f55d0e6dc","firstName":"a"}'
        );
        cy.visit('/todo');
        cy.get('[data-testid="welcome"]').should('contain.text','user');

       
      
        

        
    })
    it.only('should  not show  the first name if  the first name contains @ ',()=>{
        localStorage.setItem(
            'user',
            '{"access_token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYzU4MGEzMjFjNjgxMmY1NWQwZTZkYyIsImZpcnN0TmFtZSI6ImFiY2QiLCJsYXN0TmFtZSI6ImFiY2QiLCJpYXQiOjE2NTcxMTQxMjZ9.CvrpwVGcKFc2RhmDksEhECIr5sY3mC1TOaoAJc4NVME","userID":"62c580a321c6812f55d0e6dc","firstName":"abs@"}'
        );
        cy.visit('/todo');
        cy.get('[data-testid="welcome"]').should('contain.text','user');

       
      
        

        
    })
    it.only('should  not show  the first name if  the first name contains . ',()=>{
        localStorage.setItem(
            'user',
            '{"access_token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYzU4MGEzMjFjNjgxMmY1NWQwZTZkYyIsImZpcnN0TmFtZSI6ImFiY2QiLCJsYXN0TmFtZSI6ImFiY2QiLCJpYXQiOjE2NTcxMTQxMjZ9.CvrpwVGcKFc2RhmDksEhECIr5sY3mC1TOaoAJc4NVME","userID":"62c580a321c6812f55d0e6dc","firstName":"ab.s@"}'
        );
        cy.visit('/todo');
        cy.get('[data-testid="welcome"]').should('contain.text','user');

       
      
        

        
    })
})


