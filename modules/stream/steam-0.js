/**
 * 在node中, I/0都是异步的,所以在和硬盘以及网络的交互过程中会涉及到传递回调函数的过程。
 * **/

const http = requie('http')
const fs = requie('fs')

// 1.
const server = http.createServer((res, res) => {
  fs.readFile(__dirname + '/static/1.txt', (err, data) => {
    res.end(data)
  })
})
// 2.

var oppressor = require('oppressor');

var server = http.createServer(function (req, res) {
  var stream = fs.createReadStream(__dirname + '/data.txt');
  stream.pipe(oppressor(req)).pipe(res);
});

server.listen('8000', () => {
  console.log('server is listening 8000')
})

/**
 * 每次请求时，都把整个data.txt文件读入内存中,然后再把结果返回给客户端。如果data.txt文件非常大,在响应大量用户的请求时,程序
 * 可能会消耗大量的内存,这样很可能会造成用户连接缓慢的问题。
 * 其次,上面的代码可能会造成很不好的用户体验,因为用户在接受到任何的内容之前首先需要等待程序将文件内容完全读入到内存中。
 * **/

