/// <reference types="cypress" />

const API_ENDPOINT = 'http://localhost:8888';

context('Network request', () => {
  describe('API request should have status equal 200', () => {
    it('When login button is clicked with correct credentials, API should return 200', () => {
      const user = {
        "email": "joe@doe.com",
        "password": "1234joe"
      }
      cy.request('POST', `${API_ENDPOINT}/login`, user).then((response) => {
        expect(response.status).equal(200)
      })
    })
  })

  describe('API request should have status equal 400',  () => {
    it('When login button is clicked with wrong credentials, API should return 400', () => {
      const user = {
        "email": "nykolle@malone.com",
        "password": "1234"
      }
      cy.request({method:'POST', url:`${API_ENDPOINT}/login`, user, failOnStatusCode: false}).then((response) => {
        expect(response.status).equal(400)
      })
    })
  })


})
