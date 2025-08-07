describe('Resizable Widget', () => {
    beforeEach(() => {
        cy.visit('https://demoqa.com/resizable')
        cy.contains('Resizable').click()
    })

    it('renders resizable box', () => {
        cy.get('#resizableBoxWithRestriction').should('exist')
    })

    it('resizes box by dragging handle', () => {
        cy.get('#resizableBoxWithRestriction > .react-resizable-handle')
            .trigger('mousedown', { which: 1, pageX: 300, pageY: 300 })
            .trigger('mousemove', { pageX: 350, pageY: 350 })
            .trigger('mouseup', { force: true })

        cy.get('#resizableBoxWithRestriction').invoke('width').should('be.gte', 150)
    })
})
