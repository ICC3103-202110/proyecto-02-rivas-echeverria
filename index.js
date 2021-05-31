const {initModel} = require('./model')
const {app} = require('./app')
const {view} = require('./view')
//const {update} = require('./update')

const state = {
    model: initModel,
    currentView: view(initModel)
}

app(state, true, view)