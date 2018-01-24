const Writable = require('stream').Writable
const ws = Writable()
ws._write = function (chunk, enc, next) {
	console.log(chunk)
	next()
}
process.stdin.pipe(ws)   // 从命令行获取输入