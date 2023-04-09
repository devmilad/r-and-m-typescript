describe("entire page is loaded", ()=>{
  it("Home", ()=>{
    //!  get url
      cy.visit('/')

    //!  visit profiles
    cy.wait(3000)
    cy.get('#profileVisit').click({multiple: true})

    // ! wait 5 sec and back to home page
    cy.wait(3000)
    cy.contains('Back Home').click()

    // ! scroll to the footer
    cy.wait(3000)
    cy.scrollTo('bottom')

    // ! going next page
    cy.wait(3000)
    cy.get('span').contains('»').click()

    // ! scroll to the top
    cy.wait(2000)
    cy.scrollTo('top')
    
    // ! search for char smith
    cy.wait(3000)
      cy.get('input').type('smith{enter}')

    // ! scroll to the footer
    cy.wait(3000)
    cy.scrollTo('bottom')
    
    // ! scroll to the top
    cy.wait(2000)
    cy.scrollTo('top')

    //!  visit searched profiles
    cy.wait(3000)
    cy.contains('Home').click()
  })
})