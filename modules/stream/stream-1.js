const fs = require('fs')
const path = require('path')
const zlib = require('zlib')
const _dirname = require('../../config').__dirname

// fs.writeFile(path.join(_dirname, './static/sample.txt'), 'justdoit')

// fs.createReadStream(path.join(_dirname, '/static/sample.txt')).pipe(process.stdout)
function pipe (source, target) {
  let rs = fs.createReadStream(source, {highWateMark: 4})
  let ws = fs.createWriteStream(target, {highWateMark: 1})
  // 可读流到可写流,异步操作,可以保证内存不会被淹没,读一点，写一点
  // 如果想看文件内容,使用readFile
  rs.pipe(ws)   // 注意返回的类型
}

// pipe(path.join(_dirname, '/static/1.txt'), path.join(_dirname, '/static/4.txt'))


const r = fs.createReadStream(path.join(_dirname, 'static/1.txt'))
const z = zlib.createGzip()
const w = fs.createWriteStream(path.join(_dirname, 'static/4.txt'))

r.pipe(z).pipe(w)