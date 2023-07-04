const loginCommands = {
    login: function(email, password){
        return this.sendKeys('@emailField', email)
            .sendKeys('@passwordField', password)
            .click('@loginButton');
    }
}

module.exports = {
    commands: [loginCommands],
    elements: {
        emailField: {selector: '//android.widget.EditText[@content-desc="email"]', locateStrategy: 'xpath'},
        passwordField: {selector: '//android.widget.EditText[@content-desc="senha"]', locateStrategy: 'xpath'},
        loginButton: {selector: '//android.view.ViewGroup[@content-desc="entrar"]', locateStrategy: 'xpath'},
        loginErrorMessage: {selector: '//android.widget.TextView[@content-desc="lognFail"]', locateStrategy: 'xpath'}
    }
}