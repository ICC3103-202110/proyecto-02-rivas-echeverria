const {inputAnswer, inputAction} = require('./view')
const {printTable} = require('console-table-printer')

async function app(state, True, view){
    //while (true){
        const {model, currentView} = state
        const {tittle, table} = currentView
        console.clear()
        console.log(tittle)
        printTable(table)
        const action = await inputAction(model)
        const answer = await inputAnswer(action['action'], model)
    //}
}
module.exports = {
    app
}