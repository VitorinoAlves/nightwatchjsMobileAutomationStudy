const setTestStatus = require("../utils/setStatus.js");

module.exports = {
    before(client) {
        this.loginPage = client.page.loginPage();
        this.studentsListPage = client.page.studentsListPage();
    },

    'Login with success' (){
        this.loginPage.login(app.globals.loginUserName, app.globals.loginPassword);
        this.studentsListPage.waitForElementVisible('@searchField');

    },

   'Login with invalid password' (){
        this.loginPage.login(app.globals.loginUserName, '999999')
        .waitForElementVisible('@loginErrorMessage')
        .assert.textContains('@loginErrorMessage', "Erro no login!");

    },

    'Login with invalid username' (){
        this.loginPage.login('teste@invalid.com', app.globals.loginPassword)
        .waitForElementVisible('@loginErrorMessage')
        .assert.textContains('@loginErrorMessage', "Erro no login!AAA");

    },

    afterEach(client){
        setTestStatus(client);
    }
}




/*describe('Login', function(){
    it('Login with success', async function(app){
        const loginPage = app.page.loginPage();
        const studentsListPage = app.page.studentsListPage();

        loginPage.login(app.globals.loginUserName, app.globals.loginPassword);
        studentsListPage.waitForElementVisible('@searchField')
        .end();
    });

    it('Login with invalid password', async function(app){
        const loginPage = app.page.loginPage();

        loginPage.login(app.globals.loginUserName, '999999')
        .waitForElementVisible('@loginErrorMessage')
        .assert.textContains('@loginErrorMessage', "Erro no login!").end();
    });

    it('Login with invalid username', async function(app){
        const loginPage = app.page.loginPage();

        loginPage.login('teste@invalid.com', app.globals.loginPassword)
        .waitForElementVisible('@loginErrorMessage')
        .assert.textContains('@loginErrorMessage', "Erro no login!AAA").end();
    });

    beforeEach ((client)=>{
        console.log(client.currentTest);
    });

    afterEach ((client)=>{
        console.log(client.currentTest);
    });
});*/