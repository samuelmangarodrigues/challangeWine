/* eslint-disable @typescript-eslint/no-unused-expressions */
import * as AllItems from "./getprod"

describe('Get All Items',()=>{
    it('Request Test Get all Items',()=>{
        AllItems.AllItems().should((response) => {
            expect(response.statusText).to.equal('OK');
            expect(response.body).to.be.not.null;
        })
    })
})