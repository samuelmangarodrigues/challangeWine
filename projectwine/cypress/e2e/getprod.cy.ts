describe('empty spec', () => {
  beforeEach(()=>{
    cy.visit("https://challange-wine.vercel.app");
  })
  it('List all products',()=>{
   return cy.request({
    method:'GET',
    url:'https://wine-back-test.herokuapp.com/products',
    failOnStatusCode:false
  })
})
})