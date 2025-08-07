describe('Accordion Widget', () => {
    beforeEach(() => {
        cy.visit('https://demoqa.com/accordian')
    })

    it('should show first accordion item content by default', () => {
        cy.get('[id="section1Heading"]').should('be.visible')
        cy.get('[id="section1Content"]').should('be.visible')
    })

    it('should toggle accordion content when header clicked', () => {
        cy.get('[id="section1Heading"]').click()
        cy.get('[id="section1Content"]').should('not.be.visible')
        cy.get('[id="section1Heading"]').click()
        cy.get('[id="section1Heading"]').should('be.visible')
        cy.get('[id="section1Content"]').should('be.visible')
    })
})
