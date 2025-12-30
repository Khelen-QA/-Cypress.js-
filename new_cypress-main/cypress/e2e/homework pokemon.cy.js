     describe('Тестирование pokemon', function () {

     it('один длинный автотест для сайта [Битва покемонов]', function () {
     cy.visit('https://pokemonbattle.ru/'); //зашли на сайт

     cy.get('#k_email').type('USER_LOGIN'); // нашли поле логин и ввели правильный логин
     cy.get('#k_password').type('USER_PASSWORD'); // нашли поле пароль и ввели правильный пароль
     cy.get('.MuiButton-root').click(); // нажали кнопку войти 
     
     cy.get('.header_card_trainer_id_num').click(); // нажали кнопку тренера
     
     cy.get('[data-qa="shop"] > .k_trainer_in_button_wrapper > .k_trainer_in_button_title_no_desc').click(); // нажали кнопку смена аватара
     
     cy.get('.available > button').first().click(); // 
     cy.get('.payment_form_card_form > :nth-child(2) > .style_1_base_input').type('4620869113632996'); // нашли поле ввода номера карты, ввели номер
     cy.get(':nth-child(1) > .style_1_base_input').type('1226'); // нашли поле срок, ввели срок
     cy.get('.payment_form_card_form_inputs > :nth-child(2) > .style_1_base_input').type('125'); // нашли поле код, ввели код
     cy.get('.payment_form_card_form_input_last > .style_1_base_input').type('NAME'); // нашли поле имя, ввели имя

     cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment').click(); // нажали кнопку оплатить

     cy.get('.style_1_base_input').type('56456'); //нашли поле "код из пуша или смс", ввели код
     cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment').click(); // нажали кнопку оплатить

     cy.get('.payment_status_top_title').contains('Покупка прошла успешно'); // Проверяем текст после нажатия кнопки оплатить
     cy.get('.payment_status_top_title').should('be.visible'); // Проверяем, что тескт виден пользователю

        })

    }) 