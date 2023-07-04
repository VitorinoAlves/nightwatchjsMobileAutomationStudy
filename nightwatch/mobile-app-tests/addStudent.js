const { faker } = require('@faker-js/faker');
const Student = require('../utils/Studant');
const setTestStatus = require("../utils/setStatus.js");


module.exports = {
    before(client) {
        this.loginPage = client.page.loginPage();
        this.studentsListPage = client.page.studentsListPage();
    },

    beforeEach(client) {
        this.loginPage.login(app.globals.loginUserName, app.globals.loginPassword);
    },

    'Add a new student' (){
        const student = new Student(faker.number.int({ min: 10000, max: 99999 }), faker.person.fullName());

        this.studentsListPage.waitForElementVisible('@searchField')
        .addStudent(student.code, student.name)
        .sendKeys('@searchField', student.name)
        .verifyStudentInList(student.code, student.name);

    },

    'Cancel add new student' (){
        const student = new Student(faker.number.int({ min: 10000, max: 99999 }), faker.person.fullName());

        this.studentsListPage.sendKeys('@codigoField', student.code)
        .sendKeys('@alunoField', student.name)
        .click('@cancelarButton')
        .expect.element('@codigoField').to.have.attribute('text').equals('')
        .expect.element('@alunoField').to.have.attribute('text').equals('');

    },

    'Add student with mandatory fields empty' (){
        const student = new Student(faker.number.int({ min: 10000, max: 99999 }), faker.person.fullName());

        this.studentsListPage.waitForElementVisible('@searchField')
        .addStudent(student.code, student.name)
        .sendKeys('@searchField', student.name)
        .verifyStudentInList(student.code, student.name);

    },

    afterEach(client){
        setTestStatus(client);
    }
}



/*describe('Add studant', function(){
    beforeEach (()=>{
        const loginPage = app.page.loginPage();
        loginPage.login(app.globals.loginUserName, app.globals.loginPassword);
    });

    it('Add a new student', async function(app){
        const studentsListPage = app.page.studentsListPage();
        const student = new Student(faker.number.int({ min: 10000, max: 99999 }), faker.person.fullName());

        studentsListPage.waitForElementVisible('@searchField')
        .addStudent(student.code, student.name)
        .sendKeys('@searchField', student.name)
        .verifyStudentInList(student.code, student.name)
        .end();
    });

    it('Cancel add new student', async function(app){
        const studentsListPage = app.page.studentsListPage();
        const student = new Student(faker.number.int({ min: 10000, max: 99999 }), faker.person.fullName());

        studentsListPage.sendKeys('@codigoField', student.code)
        .sendKeys('@alunoField', student.name)
        .click('@cancelarButton')
        .expect.element('@codigoField').to.have.attribute('text').equals('')
        .expect.element('@alunoField').to.have.attribute('text').equals('');
    });

    it('Add student with mandatory fields empty', async function(app){
        const studentsListPage = app.page.studentsListPage();

        studentsListPage.click('@salvarButton')
        .expect.element('@mandatoryFieldsAlert').to.have.attribute('text').equals('Os campos devem ser preenchidos!')
        .assert.containsText('@mandatoryFieldsAlert', "Os campos devem ser preenchidos!")
        .end();
    });


});*/