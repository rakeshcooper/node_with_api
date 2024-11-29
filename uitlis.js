const { rejects } = require('assert');
const { error } = require('console');
const fs = require('fs')
const fspromise = require('fs').promises

function writeDataFile(filename, content){
 fs.writeFileSync(filename,JSON.stringify(content),'utf-8',(error) => {
    if(error){
        console.log(error);    
    }
})
}

function getPostData(req){
    try{
        return new Promise((resolve, reject) => {
            let body =''
            req.on('data',(chunk) =>{
            body += chunk.toString()
            })

            req.on('end',() => { 
                resolve(body)
            })
        })
    } catch(error){
        rejects(err)  
    }
}

module.exports = {
    writeDataFile,
    getPostData
}