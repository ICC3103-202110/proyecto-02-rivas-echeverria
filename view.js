const figlet = require('figlet')
const chalk = require('chalk')
const inquirer = require('inquirer')

function getTitle(){
    return chalk.green(
        figlet.textSync(
        'Weather app',
        {
            horizontalLayout: 'full',
            font: 'speed'
        }
        )
    )
}

function getTable(model){
    const {name} = model
    const {temp} = model
    const {max} = model
    const {min} = model
    return [
        {'name': name,
        'temp': temp,
        'max': max,
        'min': min
        }
    ]
}

function inputValues(model){
    const {name} = model
    const {temp} = model
    const {max} = model
    const {min} = model
    return inquirer.prompt([])
}

function view(model){
    return {
        tittle: getTitle(),
        table: getTable(model)
    }
}

module.exports = {
    view,
    inputValues
}