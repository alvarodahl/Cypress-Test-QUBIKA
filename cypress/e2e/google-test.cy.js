// 1- Verify Google Title
describe('Go to Google', () => {
  it('Goes to Google and verify title', () => {
    cy.visit('https://www.google.com')
    cy.title().should('eq', 'Google')
  })
})

// 2-Verify Upper Nav Menu 
describe('Verify nav menu', () => {
  it('Verifies GMAIL link', () => {
    cy.visit('https://www.google.com')
    cy.contains('a', 'Gmail').should('exist')
    cy.contains('a', 'Imágenes').should('exist')
    cy.get('[aria-label="Google Apps"]').should('exist')
    cy.contains('span', 'Acceder').should('exist')      
  })
})

// 3-Write in Google's Search Bar and validate search
describe('Verify Google Search', () => {
  it('Verifies Google Search', () => {
    cy.visit('https://www.google.com')
    //Get search box and write desired word
    cy.get('textarea[name="q"]')
      .should('exist')
      .type('teting{enter}')  
    //Verify URL contains searched word 
    cy.url().then((url) => {
      expect(url).to.contain('teting')
    })
    //Display desired suggestion
    cy.get('textarea[name="q"]')
      .type(' {backspace}') 
    //New search - list iteration 
    cy.get(".lnnVSe").each(($element) => {
      cy.wrap($element).invoke('text').then((text) => {

        if (text === 'testing') {
          // Click the option if the text matches
          cy.wrap($element).click()
        }
      })
    });
    //Validate new search word in URL   
    cy.url().then((url) => {
      expect(url).to.contain('testing')
    })
    //Validate word is in searchbox 
    cy.get('textarea[name="q"]').should('have.text', 'testing')
    //Validate first result contains searchword
    cy.get('#search .g').first().should('contain', 'testing')
    //Click Imagenes tab
    cy.contains('div', 'Imágenes').click()
    //Validate tab is active
    cy.get('.rQEFy.NZmxZe').should('have.attr','aria-current')
    //Validate img are present
    cy.contains('h2','Image Results').should('exist')
 })   
})
