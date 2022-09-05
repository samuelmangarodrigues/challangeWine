describe('empty spec', () => {
  beforeEach(()=>{
    cy.visit("https://challange-wine.vercel.app/");
  })
  it('List all products',()=>{
   return cy.request({
    method:'GET',
    url:'products',
    failOnStatusCode:false
  })
})
  it('Test input filter prices',()=>{
    cy.get('#input-name').type('Bacalhôa')
    cy.get('#btnSearch').click()
  })
})