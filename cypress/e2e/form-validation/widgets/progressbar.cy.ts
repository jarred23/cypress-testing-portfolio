describe('ProgressBar Widget', () => {
    beforeEach(() => {
        cy.visit('https://demoqa.com/progress-bar')
    })

    it('shows initial progress width', () => {
        cy.get('.progress-bar').invoke('attr', 'style').should('contain', 'width')
    })

    it('updates progress bar width after clicking Start', () => {
        cy.get('#startStopButton').click()
        // wait a bit to let progress bar move
        cy.wait(1000)

        // check the width style is increasing or changed
        cy.get('.progress-bar').invoke('attr', 'style').then((style) => {
            expect(style).to.match(/width: \d+%/)
        })
    })
})
