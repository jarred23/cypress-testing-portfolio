describe('Practice Form Tests', () => {
    beforeEach(() => {
        cy.visit('https://demoqa.com/automation-practice-form');
    });

    it('fills out the practice form using fixture data', () => {
        cy.fixture('practice-form-data').then((data) => {
            cy.get('#firstName').type(data.firstName);
            cy.get('#lastName').type(data.lastName);
            cy.get('#userEmail').type(data.email);
            cy.get(`input[name="gender"][value="${data.gender}"]`).check({ force: true });
            cy.get('#userNumber').type(data.mobile);

            // Set DOB
            cy.get('#dateOfBirthInput').click();
            const [year, month, day] = data.dateOfBirth.split('-');
            cy.get('.react-datepicker__year-select').select(year);
            cy.get('.react-datepicker__month-select').select((parseInt(month) - 1).toString());
            cy.get(`.react-datepicker__day--0${day}`).eq(0).click();

            // Add Subjects
            data.subjects.forEach((subject: any) => {
                cy.get('#subjectsInput').type(subject);
                cy.get('.subjects-auto-complete__menu-list').contains(subject).click();
            });

            // Select Hobbies
            data.hobbies.forEach((hobby: any) => {
                cy.contains('label', hobby).click();
            });

            // Fill Address
            cy.get('#currentAddress').type(data.currentAddress);

            // Submit the form
            cy.get('#submit').click();

            // Verify submission modal visible
            cy.get('.modal-content').should('be.visible');
            cy.get('td').contains('Student Name').next().should('contain', `${data.firstName} ${data.lastName}`);
            cy.get('td').contains('Student Email').next().should('contain', data.email);
        });
    });
});
