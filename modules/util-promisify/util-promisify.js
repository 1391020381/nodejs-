const fs = require('fs')
const promisify = require('util').promisify
const path = require('path')
const _dirname = require('../../config'). __dirname
const read = promisify(fs.readFile)

read(path.join(_dirname,'/static/1.txt')).then(data=>{
    console.log(data.toString())
}).catch(err=>{
    console.log(err)
})

async function test() {
 try{
    const conten =   await read(path.join(_dirname,'/static/1.txt'))
    console.log(conten.toString())
 }catch(err){
 console.log(err)
 }

}