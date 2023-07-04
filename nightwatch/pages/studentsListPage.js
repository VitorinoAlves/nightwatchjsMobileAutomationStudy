const studentsListCommands = {
    addStudent: function(code, name){
        return this.sendKeys('@codigoField', code)
            .sendKeys('@alunoField', name)
            .click('@salvarButton');
    },

    verifyStudentInList: function(code, name){
        return this.assert.textContains({selector: `//android.view.ViewGroup[@content-desc="${code}"]/android.widget.TextView`, locateStrategy: 'xpath'}, `${code} - ${name}`);
    },
}

module.exports = {
    commands: [studentsListCommands],
    elements: {
        searchField: {selector: '//android.widget.EditText[@content-desc="search"]', locateStrategy: 'xpath'},
        codigoField: {selector: '//android.widget.EditText[@content-desc="codigo"]', locateStrategy: 'xpath'},
        alunoField: {selector: '//android.widget.EditText[@content-desc="aluno"]', locateStrategy: 'xpath'},
        salvarButton: {selector: '//android.view.ViewGroup[@content-desc="salvar"]/android.view.ViewGroup', locateStrategy: 'xpath'},
        cancelarButton: {selector: '//android.view.ViewGroup[@content-desc="cancelar"]/android.view.ViewGroup', locateStrategy: 'xpath'},
        mandatoryFieldsAlert: {selector: 'android:id/alertTitle',locateStrategy: 'id'}
    }
}