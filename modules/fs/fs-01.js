const _dirname = require('../../config').__dirname
const fs = require('fs')
const path = require('path')

fs.readFile(path.join(_dirname, '/static/1.txt'), (err, data) => {
  if (err) throw err
  console.log('data:', data.toString())
})

let text = fs.readFileSync(path.join(_dirname, '/static/1.txt'), 'utf-8')
console.log('text:', text)