import * as AllItems from "./getprod.cy"

describe('Get All Items',()=>{
    it('Request Test Get all Items',()=>{
        AllItems.AllItems().should((response)=>{
            cy.log(response.body)
            cy.log(response.statusText)
        })
    })
})