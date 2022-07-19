
/// <reference types="cypress" />
describe('should check all the functionalities of the signup page', () => {
  beforeEach(()=>{
    cy.visit('/signup');
  })
  it('should show an error if the first name in empty', () => {
  
  cy.get('[data-testid="submit"]').click();
  cy.get('.MuiFormHelperText-root').should('be.visible').and('contain','First Name is required,');
  
  })
  it('should show an error if the first name in less than 3 characters', () => {
     cy.get('[data-testid="first-name"]').type('aa');
    cy.get('[data-testid="submit"]').click();
    cy.get('.MuiFormHelperText-root').should('be.visible').and('contain','First Name is required,');
    
    })
    it('should show an error if the first name in more or equal  3 characters', () => {
      cy.get('[data-testid="first-name"]').type('abcd');
     cy.get('[data-testid="submit"]').click();
     cy.get('.MuiFormHelperText-root').should('be.visible').and('contain','Last Name is required,');
     
     })

     ///// last name test case

     it('should show an error if the last name in empty', () => {
      cy.get('[data-testid="first-name"]').type('abcd');

      cy.get('[data-testid="submit"]').click();
      cy.get('.MuiFormHelperText-root').should('be.visible').and('contain','Last Name is required,');
      
      })
      it('should show an error if the last name in less than 3 characters', () => {
         cy.get('[data-testid="first-name"]').type('abcd');
         cy.get('[data-testid="last-name"]').type('aa');

        cy.get('[data-testid="submit"]').click();
        cy.get('.MuiFormHelperText-root').should('be.visible').and('contain','Last Name is required,');
        
        })
        it('should show an error if the last name in more or equal  3 characters', () => {
          cy.get('[data-testid="first-name"]').type('abcd');
          cy.get('[data-testid="last-name"]').type('abcd');

         cy.get('[data-testid="submit"]').click();
         cy.get('.MuiFormHelperText-root').should('be.visible').and('contain','Please Insert a correct Email format');
         
         })


         /// email test case

         it('should show an error if the email in empty', () => {
          cy.get('[data-testid="first-name"]').type('abcd');
          cy.get('[data-testid="last-name"]').type('abcd');

    
          cy.get('[data-testid="submit"]').click();
          cy.get('.MuiFormHelperText-root').should('be.visible').and('contain','Please Insert a correct Email format');
          
          })
          it('should show an error if the email is not corrects', () => {
             cy.get('[data-testid="first-name"]').type('abcd');
             cy.get('[data-testid="last-name"]').type('abcd');
             cy.get('[data-testid="email"]').type('mohammed');

    
            cy.get('[data-testid="submit"]').click();
            cy.get('.MuiFormHelperText-root').should('be.visible').and('contain','Please Insert a correct Email format');
            
            })
            it('should show an error if the email is  correct ', () => {
              cy.get('[data-testid="first-name"]').type('abcd');
              cy.get('[data-testid="last-name"]').type('abcd');
              cy.get('[data-testid="email"]').type('mohammed@gmail.com');

    
             cy.get('[data-testid="submit"]').click();
             cy.get('.MuiFormHelperText-root').should('be.visible').and('contain','Password must be Minimum eight characters');
             
             })

             /// password test case

         it('should show an error if the password in empty', () => {
          cy.get('[data-testid="first-name"]').type('abcd');
          cy.get('[data-testid="last-name"]').type('abcd');
          cy.get('[data-testid="email"]').type('mohammed@gmail.com');


    
          cy.get('[data-testid="submit"]').click();
          cy.get('.MuiFormHelperText-root').should('be.visible').and('contain','Password must be Minimum eight characters');
          
          });
          [
            'test',
            'testsfjffjfj',
            'test852147',
            'Testfddgd123'
          ].forEach((password)=>{
            it('should show an error if the password ' + password, () => {
              cy.get('[data-testid="first-name"]').type('abcd');
              cy.get('[data-testid="last-name"]').type('abcd');
              cy.get('[data-testid="email"]').type('mohammed@gmail.com');
              cy.get('[data-testid="password"]').type(password);

 
     
             cy.get('[data-testid="submit"]').click();
             cy.get('.MuiFormHelperText-root').should('be.visible').and('contain','Password must be Minimum eight characters');
             
             })

          });
          
            it('should show an error if the password is  correct ', () => {
              cy.get('[data-testid="first-name"]').type('abcd');
              cy.get('[data-testid="last-name"]').type('abcd');
              cy.get('[data-testid="email"]').type('mohammed@gmail.com');
              cy.get('[data-testid="password"]').type('Test123!');


    
             cy.get('[data-testid="submit"]').click();
             cy.get('.MuiFormHelperText-root').should('be.visible').and('contain','Second password does not match the first Password');
             
             })
             //////Confirm password
             it('should show an error if the password and cofirm passsword are not the same ', () => {
              cy.get('[data-testid="first-name"]').type('abcd');
              cy.get('[data-testid="last-name"]').type('abcd');
              cy.get('[data-testid="email"]').type('mohammed1@gmail.com');
              cy.get('[data-testid="password"]').type('Test123!');
              cy.get('[data-testid="confirm-password"]').type('Test123!!');


    
             cy.get('[data-testid="submit"]').click();
             cy.get('.MuiFormHelperText-root').should('be.visible').and('contain','Second password does not match the first Password');

            //  cy.get('.MuiFormHelperText-root').should('not.exist');
            //  cy.url().should('contain','/todo');
             
             })

             it('should show an error if the password and cofirm passsword are the same ', () => {
              cy.intercept('POST','**/api/v1/users/register',{
                fixture:'register',
                statusCode:201,

              }).as('register');
              cy.get('[data-testid="first-name"]').type('abcd');
              cy.get('[data-testid="last-name"]').type('abcd');
              cy.get('[data-testid="email"]').type('mohammed123345@gmail.com');
              cy.get('[data-testid="password"]').type('Test123!!!');
              cy.get('[data-testid="confirm-password"]').type('Test123!!!');


    
             cy.get('[data-testid="submit"]').click();
            // cy.get('.MuiFormHelperText-root').should('not.exist');
            cy.wait('@register').then((xhr)=>{
              expect(xhr.request.body.email).to.eq(
                'mohammed123345@gmail.com'
              );
              expect(xhr.request.body.firstName).to.eq('abcd');
              expect(xhr.request.body.lastName).to.eq('abcd');
              expect(xhr.request.body.password).to.eq('Test123!!!');



            })
           
            //  cy.url().should('contain','/todo');
             
             })

             //////

             it.only('should show that the user is aleady registered  ', () => {
              cy.intercept('POST','**/api/v1/users/register',{
                fixture:'registerError',
                statusCode:400,

              }).as('register');
              cy.get('[data-testid="first-name"]').type('abcd');
              cy.get('[data-testid="last-name"]').type('abcd');
              cy.get('[data-testid="email"]').type('mohammed123345@gmail.com');
              cy.get('[data-testid="password"]').type('Test123!!!');
              cy.get('[data-testid="confirm-password"]').type('Test123!!!');


    
             cy.get('[data-testid="submit"]').click();
             cy.get('.MuiFormHelperText-root').should('not.exist');
            // cy.wait('@register').then((xhr)=>{
            //   expect(xhr.request.body.email).to.eq(
            //     'mohammed123345@gmail.com'
            //   );
            //   expect(xhr.request.body.firstName).to.eq('abcd');
            //   expect(xhr.request.body.lastName).to.eq('abcd');
            //   expect(xhr.request.body.password).to.eq('Test123!!!');



            })
           
            //  cy.url().should('contain','/todo');
             
             })
    
