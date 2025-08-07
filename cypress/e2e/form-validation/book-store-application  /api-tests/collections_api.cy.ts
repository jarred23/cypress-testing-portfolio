describe('Book Store API - User Book Collection', () => {
    const baseUrl = 'https://demoqa.com/BookStore/v1'
    const accountUrl = 'https://demoqa.com/Account/v1'
    const testUser = {
        userName: `testuser${Date.now()}`,
        password: 'Test@1234'
    }
    let token = ''
    let userId = ''

    before(() => {
        // Create a user and get the userId
        cy.request('POST', `${accountUrl}/User`, testUser).then((res) => {
            expect(res.status).to.eq(201)
            userId = res.body.userID
        })

        // Generate token for that user
        cy.request('POST', `${accountUrl}/GenerateToken`, {
            userName: testUser.userName,
            password: testUser.password
        }).then((res) => {
            expect(res.status).to.eq(200)
            token = res.body.token
        })
    })

    it('adds a book to user collection', () => {
        cy.request({
            method: 'POST',
            url: `${baseUrl}/Books`,
            headers: { Authorization: `Bearer ${token}` },
            body: {
                userId,
                collectionOfIsbns: [{ isbn: '9781449325862' }]
            }
        }).then((res) => {
            expect(res.status).to.eq(201)
            expect(res.body).to.have.property('books')
            expect(res.body.books[0]).to.have.property('isbn', '9781449325862')
        })
    })

    it('deletes a book from user collection', () => {
        cy.request({
            method: 'DELETE',
            url: `${baseUrl}/Book`,
            headers: { Authorization: `Bearer ${token}` },
            body: {
                userId,
                isbn: '9781449325862'
            }
        }).then((res) => {
            expect(res.status).to.eq(204)
        })
    })
})
