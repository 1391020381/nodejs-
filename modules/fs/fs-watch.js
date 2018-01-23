const fs = require('fs')
const path = require('path')
const _dirname = require('../../config').__dirname

fs.watch(path.join(_dirname, '/static/1.txt'), (curr, prev) => {
  console.log(`the current mtime is :${curr}`)
  console.log(`the previous mtime was:${prev}`)
  // atime "访问时间" - 文件数据最近被访问的时间
  // mtime "修改时间" - 文件数据最近被修改的时间
})

fs.watchFile(path.join(_dirname, '/static/1.txt'), (curr, prev) => {
  console.log(`the current mtime is:${curr.mtime}`)
  console.log(`the current mtime was:${prev.mtime}`)
})