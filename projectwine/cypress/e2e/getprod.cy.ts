export const AllItems=()=>{
  return cy.request({
    method:'GET',
    url:'https://wine-back-test.herokuapp.com/products',
    failOnStatusCode:false
  })
}