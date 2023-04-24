describe('Тестирование логина и пароля', function () {
    
    it('Позитивный кейс на авторизацию', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('german@dolnikov.ru')
        cy.get('#pass').type('iLoveqastudio1')
        cy.get('#loginButton').click()
        cy.contains('Авторизация прошла успешно')
        cy.get('#exitMessageButton > .exitIcon')
     })

     it('Логика восстановления пароля', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#forgotEmailButton').click()
        cy.get('#mailForgot').type('Takanori.82@mail.ru')
        cy.get('#restoreEmailButton').click()
        cy.contains('Успешно отправили пароль на e-mail')
        cy.get('#exitMessageButton > .exitIcon')
     })

     it('Негативный кейс на авторизацию, неправильный пароль', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('german@dolnikov.ru')
        cy.get('#pass').type('iLoveqastudio21')
        cy.get('#loginButton').click()
        cy.contains('Такого логина или пароля нет')
        cy.get('#exitMessageButton > .exitIcon')
     })

     it('Негативный кейс на авторизацию, неправильный логин', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('takanori.82@mail.ru')
        cy.get('#pass').type('iLoveqastudio1')
        cy.get('#loginButton').click()
        cy.contains('Такого логина или пароля нет')
        cy.get('#exitMessageButton > .exitIcon')
     })

     it('Негативный кейс на валидации', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('germandolnikov.ru')
        cy.get('#pass').type('iLoveqastudio1')
        cy.get('#loginButton').click()
        cy.contains('Нужно исправить проблему валидации')
        cy.get('#exitMessageButton > .exitIcon')
     })

     it('Приведение к строчным буквам в логине', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('GerMan@Dolnikov.ru')
        cy.get('#pass').type('iLoveqastudio1')
        cy.get('#loginButton').click()
        cy.contains('Авторизация прошла успешно')
        cy.get('#exitMessageButton > .exitIcon')
     })
})
