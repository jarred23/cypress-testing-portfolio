describe('AutoComplete Widget', () => {
    beforeEach(() => {
        cy.visit('https://demoqa.com/auto-complete')
    })

    it('shows suggestions when typing', () => {
        cy.get('input[type="text"]').eq(1).type('whi')
    })

})
