import faker from 'faker';

describe('Test all login API test cases', () => {
  it('should return an error if the email is not part of the body', () => {
    cy.request({
      url: 'http://localhost:8080/api/v1/users/login',
      method: 'POST',
      body: {
        password: 'Test123!',
      },
      failOnStatusCode: false,
    }).then((res) => {
      expect(res.status).to.eql(400);
      expect(res.body.message).to.eql(
        'Please Fill a correct Password'
      );
    });
  });

  it('should return an error if the email wrong', () => {
    cy.request({
      url: 'http://localhost:8080/api/v1/users/login',
      method: 'POST',
      body: {
        email: 'me',
        password: 'Test123!',
      },
      failOnStatusCode: false,
    }).then((res) => {
      expect(res.status).to.eql(400);
      expect(res.body.message).to.eql(
        'Please Fill a correct Password'
      );
    });
  });

  it('should return an error if the password is not part of the body', () => {
    cy.request({
      url: 'http://localhost:8080/api/v1/users/login',
      method: 'POST',
      body: {
        email: 'me@hatemhatamleh.com',
      },
      failOnStatusCode: false,
    }).then((res) => {
      expect(res.status).to.eql(400);
      expect(res.body.message).to.eql(
        'Please Fill a correct Password'
      );
    });
  });

  it('should return an error if the password is wrong', () => {
    cy.request({
      url: 'http://localhost:8080/api/v1/users/login',
      method: 'POST',
      body: {
        email: 'me@hatemhatamleh.com',
        password: 'Test',
      },
      failOnStatusCode: false,
    }).then((res) => {
      expect(res.status).to.eql(400);
      expect(res.body.message).to.contain(
        'Please Fill a correct Password'
      );
    });
  });

  it('should login a user correctly', () => {
    cy.request({
      url: 'http://localhost:8080/api/v1/users/login',
      method: 'POST',
      body: {
        email: 'me@hatemhatamleh.com',
        password: 'Test123!',
      },
      failOnStatusCode: false,
    }).then((res) => {
      expect(res.status).to.eql(200);
      expect(res.body.firstName).to.eql('Hatem ');
    });
  });
});