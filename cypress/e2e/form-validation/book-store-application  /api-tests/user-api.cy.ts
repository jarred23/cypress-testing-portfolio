describe('Book Store API - User Endpoints', () => {
    const baseUrl = 'https://demoqa.com/Account/v1'
    const testUser = {
        userName: `testuser${Date.now()}`,
        password: 'Test@1234'
    }
    let token = ''

    it('creates a new user', () => {
        cy.request('POST', `${baseUrl}/User`, testUser).then((res) => {
            expect(res.status).to.eq(201)
            expect(res.body).to.have.property('username', testUser.userName)
        })
    })

    it('generates token for user', () => {
        cy.request('POST', `${baseUrl}/GenerateToken`, {
            userName: testUser.userName,
            password: testUser.password
        }).then((res) => {
            expect(res.status).to.eq(200)
            expect(res.body).to.have.property('token')
            token = res.body.token
        })
    })
})
