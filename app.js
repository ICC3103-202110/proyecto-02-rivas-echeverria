const {inputAnswer, inputAction} = require('./view')
const {printTable} = require('console-table-printer')
const {ModelUpdate} = require('./update')
async function app(state, ModelUpdate, view){
    while (true){
        const {model, currentView} = state
        const {tittle, table} = currentView
        console.clear()
        
        console.log(tittle)
        if (Object.keys(model).length==0){
            console.log('NO CITIES')
        }
        else{printTable(table)}
        
        const action = await inputAction(model)
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