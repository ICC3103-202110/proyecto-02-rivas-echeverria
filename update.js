const {NameCity,SelectCity} = require('./view')

const axios= require("axios")




async function API (city){
    const url=`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8454e5211589480a174e7488a24c7fcf`
    const weather = await axios.get(url)

    return [city,weather.data.main.temp,weather.data.main.temp_max,weather.data.main.temp_min]
}
//Amsterdam

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
        console.log('Entra a update')
        const CN=await SelectCity(model)
        const data =await API(CN['selectCity'])
        const cities2= data[0]
        const temp2= data[1]
        const max2= data[2]
        const min2= data[3]
        for (var l=0; l < Object.keys(model).length; l++){
            console.log('entra a for')
            if (model[l].cities==cities2){
                console.log('entra a if')
                model[l].cities = cities2
                model[l].temp = temp2
                model[l].max = max2
                model[l].min = min2
                return model
                }
            }
    }
             
            
            
            
        
    
        
    
    if (option=='Delete City'){
        const CN=await SelectCity()
        const cities2= CN
        for (var l=0; l < Object.keys(model).length; l++){
            if (model[l].cities==cities2){
                const a=model[l].cities.splice(l,1)
                const b=model[l].temp.splice(l,1)
                const c=model[l].max.splice(l,1)
                const d=model[l].min.splice(l,1)
                return{
                    ...model[l],
                    cities:a ,
                    temp: b,
                    max: c,
                    min:d 

                }
            }
        } 
    

    }
    
    else{
        console.log(option," :option")
    }
}





module.exports = {
    
    ModelUpdate
}




















