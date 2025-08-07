describe('DatePicker Widget', () => {
    beforeEach(() => {
        cy.visit('https://demoqa.com/date-picker')
    })

    it('opens calendar on input focus', () => {
        cy.get('[id="dateAndTimePickerInput"]').should('be.visible')
    })

    it('selects date and updates input', () => {
        cy.get('input[type="text"]').eq(0).click()
        cy.get('[role="option"]').contains('15').click()
        cy.get('input[type="text"]').should('contain.value', '15')
    })
})
