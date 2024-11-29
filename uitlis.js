const fs = require('fs')
const fspromise = require('fs').promises

function writeDataFile(filename, content){
 fspromise.writeFile(filename,JSON.stringify(content),'utf-8',(error) => {
    if(error){
        console.log(error);    
    }
})
}

module.exports = {
    writeDataFile
}