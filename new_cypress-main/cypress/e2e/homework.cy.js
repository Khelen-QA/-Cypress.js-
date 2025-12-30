describe('Автотесты для формы логина и пароля', function () {

    it('проверка на позитивный кейс авторизации', function () {
         cy.visit('https://login.qa.studio/'); // зашли на сайт

         cy.get('#mail').type('german@dolnikov.ru'); // нашли поле логин и ввели правильный логин
         cy.get('#pass').type('qa_one_love1'); // нашли поле пароль и ввели правильный пароль
         cy.get('#loginButton').click(); // нажали кнопку войти 

         cy.get('#messageHeader').contains('Авторизация прошла успешно'); // Проверяем, что после авторизации есть текст
         cy.get('#messageHeader').should('be.visible'); // Проверяем, что текст виден пользователю
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Проверяем наличие крестика и его видимость 

     })

         it('автотест на проверку логики восстановления пароля', function () {
         cy.visit('https://login.qa.studio/'); // зашли на сайт

         cy.get('#forgotEmailButton').click(); // нашли кнопку "забыли пароль" и отжали кнопку
         cy.get('#mailForgot').type('123@mail.com') //нашли поле "e-mail", ввели емэйл
         cy.get('#restoreEmailButton').click(); // Нажали кнопку "отправить код", нажали

         cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); // Проверяем текст после нажатия кпонки 
         cy.get('#messageHeader').should('be.visible'); // Проверяем, что текст виден пользователю
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Проверяем наличие крестика и его видимость 

     })

      it('проверка на негативный кейс авторизации - правильный логин и НЕправильный пароль', function () {
      cy.visit('https://login.qa.studio/'); // зашли на сайт

      cy.get('#mail').type('german@dolnikov.ru'); // нашли поле логин и ввели правильный логин
      cy.get('#pass').type('qa_one_love3'); // нашли поле пароль и ввели НЕправильный пароль
      cy.get('#loginButton').click(); // нажали кнопку войти 

      cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Проверяем тескт после нажатия кнопки 
      cy.get('#messageHeader').should('be.visible'); // Проверяем, что текст виден пользователю 
      cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Проверяем наличие крестика и его видимость 

     })

      it('проверка на негативный кейс авторизации - НЕправильный логин и правильный пароль', function () {
      cy.visit('https://login.qa.studio/'); // зашли на сайт

      cy.get('#mail').type('germ@dolnikov.ru'); // нашли поле логин и ввели НЕправильный логин
      cy.get('#pass').type('qa_one_love1'); // нашли поле пароль и ввели НЕправильный пароль
      cy.get('#loginButton').click(); // нажали кнопку войти 

      cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Проверяем тескт после нажатия кнопки 
      cy.get('#messageHeader').should('be.visible'); // Проверяем, что тескт виден пользователю 
      cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Проверяем наличие крестика и его видимость 

     }) 

      it('проверка на негативный кейс валидации', function () {
      cy.visit('https://login.qa.studio/'); // зашли на сайт

      cy.get('#mail').type('germdolnikov.ru'); // нашли поле логин и ввели логин без @
      cy.get('#pass').type('qa_one_love1'); // нашли поле пароль, ввели правильный пароль
      cy.get('#loginButton').click(); // нажали кнопку войти 

      cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); //Проверяем тескт после нажатия кнопки 
      cy.get('#messageHeader').should('be.visible'); // Проверяем, что тескт виден пользователю
      cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Прверяем наличие крестика и его видимость 

     }) 

      it('проверка на приведение к строчным буквам в логине', function () {
      cy.visit('https://login.qa.studio/'); // зашли на сайт

      cy.get('#mail').type('GerMan@Dolnikov.ru'); // нашли поле логин, ввели логин
      cy.get('#pass').type('qa_one_love1'); // нашли поле пароль, ввели правильный пароль
      cy.get('#loginButton').click(); // нажали кнопку войти 

      cy.get('#messageHeader').contains('Авторизация прошла успешно'); // Проверяем текст после нажатия кнопки
      cy.get('#messageHeader').should('be.visible'); // Проверяем, что тескт виден пользователю
      cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Прверяем наличие крестика и его видимость 

     })

     })

     describe('Тестирование pokemon', function () {

     it('search something', function () {
        cy.visit('https://pokemonbattle.ru/');
        })
})