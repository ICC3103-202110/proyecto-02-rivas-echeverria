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
    const {cities} = model
    const {temp} = model
    const {max} = model
    const {min} = model
    return [
        {'name': cities,
        'temp': temp,
        'max': max,
        'min': min
        }
    ]
}

function inputAction(model){
    message = 'Select action:'
    const choices = ['Add city', 'Update City', 'Delete City']
    return inquirer.prompt([
        {
            name: 'action',
            type: 'list',
            message: message,
            choices: choices
        }
    ])
}

function inputAnswer(action, model){
    const {cities} = model
    const {temp} = model
    const {max} = model
    const {min} = model
    if(action === 'Add City'){
        return inquirer.prompt([
            {
                name: 'addCity',
                type: 'input',
                message: 'Location?'
            }
        ])
    }
    
    if(action === 'Update City'){
        return inquirer.prompt([
            {
                name: 'updateCity',
                type: 'list',
                message: 'Update City',
                choices: cities
            }
        ])
    }

    if(action === 'Delete City'){
        return inquirer.prompt([
            {
                name: 'deleteCity',
                type: 'list',
                message: 'Delete City:',
                choices: cities
            }
        ])
    }
}

function view(model){
    return {
        tittle: getTitle(),
        table: getTable(model)
    }
}

module.exports = {
    view,
    inputAction,
    inputAnswer
}