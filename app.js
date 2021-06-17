const {inputAnswer, inputAction} = require('./view')
const {printTable} = require('console-table-printer')
const {ModelUpdate} = require('./update')
async function app(state, ModelUpdate, view){
    while (true){
        const {model, currentView} = state
        const {tittle, table} = currentView
        console.clear()
        
        console.log(tittle)
        printTable(table)
        
        const action = await inputAction(model)
        //const answer = await inputAnswer(action['action'], model)
        const UpdatedModel=await ModelUpdate(model,action['action'])
        state={
            ...state,
            model:UpdatedModel,
            currentView:view(UpdatedModel)
        }
    }
}
module.exports = {
    app
}