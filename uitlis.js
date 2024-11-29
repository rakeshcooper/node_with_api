const { ifError } = require('assert')
const fs = require('fs')



function writeDataFile(filename, content){
fs.writeFile(filename,JSON.stringify(content),'utf-8',(error) => {
    if(error){
        console.log(error);
        
    }
})
}

module.exports = {
    writeDataFile
}