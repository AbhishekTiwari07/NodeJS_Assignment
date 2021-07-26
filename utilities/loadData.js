const fs = require('fs')


module.exports = (name)=>{
    try{
        const dataBuffer = fs.readFileSync(name)
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    }
    catch(e){
        return []
    }
}