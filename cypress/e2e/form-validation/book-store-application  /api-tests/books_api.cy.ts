describe('Book Store API - Books Endpoints', () => {
    const baseUrl = 'https://demoqa.com/BookStore/v1'

    it('retrieves list of books', () => {
        cy.request('GET', `${baseUrl}/Books`).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body.books).to.be.an('array').and.have.length.greaterThan(0)
        })
    })

    it('retrieves book details by ISBN', () => {
        const isbn = '9781449325862' // Example ISBN from demo data
        cy.request('GET', `${baseUrl}/Book?ISBN=${isbn}`).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.have.property('isbn', isbn)
        })
    })
})
