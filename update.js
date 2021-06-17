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
        const data= API(CN['nameCity'])
        const datat= data.then(value =>{

            const cities2= value[0]
            const temp2=value[1] 
            const max2= value[2]
            const min2= value[3]
            
            const NewData={cities:cities2 ,temp:temp2 ,max:max2 ,min:min2}
            model.push(NewData)
        
            return model        
    })
    }
    if (option=='Update City'){
        const CN=await SelectCity()
        const data =API(CN['selectCity'])
        const datat=data.then(value =>{
            const cities2= value[0]
            const temp2= value[1]
            const max2= value[2]
            const min2= value[3]
            for (var l=0; l < Object.keys(model).length; l++){
                if (model[l].cities==cities2){
                    return {
                    ...model[l],
                    cities:cities2 , 
                    temp: temp2,
                    max: max2 ,
                    min: min2 
                    }
                }
            }
        })
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




















