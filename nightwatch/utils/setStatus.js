module.exports = function (client){
    console.log(client.options.testEnv);
        if(client.options.testEnv === "browserstack.android"){
            if(client.currentTest.results.failed>0){
                console.log("Atencao teste falhou!!!!");
                client.executeScript('browserstack_executor: {"action": "setSessionStatus", "arguments": {"status":"passed","reason": ""}}');
            } else {
                console.log("Atencao teste passou :)");
                client.executeScript('browserstack_executor: {"action": "setSessionStatus", "arguments": {"status":"passed","reason": ""}}');
            }
        }
        client.end();
}