const {view} = require('./view')
const axios= require("axios")




async function API (city){
    const url=`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8454e5211589480a174e7488a24c7fcf`
    const weather = await axios.get(url)
    console.log(weather.data.main)
    return [city,weather.data.main.temp,weather.data.main.temp_max,weather.data.main.temp_min]
}


function ModelUpdate(model,option){

    if (option=='Add city'){
        const CN= NameCity()
        const data= API(CN)
        const cities2= data[0]
        const temp2=data[1] 
        const max2= data[2]
        const min2= data[3]

        const NewData={cities:cities2 ,temp:temp2 ,max:max2 ,min:min2}
        model.push(NewData)
        return model        
    
    }
    /*if (option=='updateCity'){
        const cities2= ,
        const temp2= ,
        const max2= ,
        const min2= 
    
        return {
            ...model,
            cities: ,
            temp: ,
            max: ,
            min: 
        }
    }
    if (option=='deleteCity'){
        const cities2= ,
        const temp2= ,
        const max2= ,
        const min2= 
    
        return {
            ...model,
            cities: ,
            temp: ,
            max: ,
            min: 
        }
    }
    */
    else{
        console.log(option," :option")
    }
}





module.exports = {
    
    ModelUpdate
}




















