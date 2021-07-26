const fs = require('fs')

module.exports = (name, employees)=>{
    const dataJSON = JSON.stringify(employees)
    fs.writeFileSync(name,dataJSON)
}