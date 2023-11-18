describe('service is available', function () {
  before(function () {
    cy.viewport('macbook-16')
    cy.visit('http://localhost:3000')
  })

  it('modal ingredients window testing', function () {
    cy.contains('Краторная булка N-200i').click()
    cy.get('[class^=modal_modal__content_ingr__]').first().as('modalIngredient')
    cy.get('[class^=modal-overlay_active__]').last().as('exitOverlay')
    cy.get('@modalIngredient').should(
      'have.css',
      'background-color',
      'rgb(28, 28, 33)'
    )
    cy.get('@exitOverlay').click({ force: true })
    cy.contains('Краторная булка N-200i').click()
    cy.get('@exitOverlay').trigger('keydown', { key: 'Escape', force: true })
    cy.contains('Краторная булка N-200i').click()
    cy.get('[class^=  modal_decor_wrapper_icon__] > svg').last().as('exit')
    cy.get('@exit').click({ force: true })
  })
  it('user order way testing', () => {
    const dataTransfer = new DataTransfer()
    cy.viewport('macbook-16')
    cy.visit('http://localhost:3000')
    cy.get('#643d69a5c3f7b9001cfa093c').trigger('dragstart', { dataTransfer })
    cy.get('#cypress_drop').trigger('drop', { dataTransfer })
    cy.get('#643d69a5c3f7b9001cfa0942').trigger('dragstart', { dataTransfer })
    cy.get('#cypress_drop').trigger('drop', { dataTransfer })
    cy.get('#643d69a5c3f7b9001cfa0942').trigger('dragstart', { dataTransfer })
    cy.get('#cypress_drop').trigger('drop', { dataTransfer })
    cy.get('#643d69a5c3f7b9001cfa093f').trigger('dragstart', { dataTransfer })
    cy.get('#cypress_drop').trigger('drop', { dataTransfer })
    cy.get('.button').click()
    cy.get('.input_type_text').type('ig.marks@yandex.ru')
    cy.get('.input_type_password').type('qwerty')
    cy.get('.button').click()
    cy.wait(1500)
    cy.get('.button').click().wait(20000)
  })
})
