const {NameCity,SelectCity} = require('./view')
const axios= require("axios")

async function API (city){
    const url=`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8454e5211589480a174e7488a24c7fcf&units=metric`
    const weather = await axios.get(url)

    return [city,weather.data.main.temp,weather.data.main.temp_max,weather.data.main.temp_min]
}

async function ModelUpdate(model,option){

    if (option=='Add city'){
        const CN= await NameCity()
        const data= await API(CN['nameCity'])

        const cities2= data[0]
        const temp2=data[1] 
        const max2= data[2]
        const min2= data[3]
            
        const NewData={cities:cities2 ,temp:temp2 ,max:max2 ,min:min2}
        model.push(NewData)
        
        return model        
    }

    if (option=='Update City'){
        const CN=await SelectCity(model)
        const data =await API(CN['selectCity'])

        const cities2= data[0]
        const temp2= data[1]
        const max2= data[2]
        const min2= data[3]

        for (var l=0; l < Object.keys(model).length; l++){
            if (model[l].cities==cities2){

                model[l].cities = cities2
                model[l].temp = temp2
                model[l].max = max2
                model[l].min = min2

                return model
                }
            }
    }
             
    if (option=='Delete City'){
        const CN=await SelectCity(model)
        const cities2= CN['selectCity']
        const newModel = []

        for (var l=0; l < Object.keys(model).length; l++){
            if (model[l].cities!==cities2){

                newModel.push(model[l])

                }
            }

        return newModel
    } 
}

module.exports = {  
    ModelUpdate
}




















