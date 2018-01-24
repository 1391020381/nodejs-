const http = require('http')

// http server例子
const server = http.createServer((serverReq, serverRes) => {
  let url = serverReq.url
  serverRes.end('您访问的地址是:', url)
})
server.listen(3000, () => {
  console.log('server is listening 3000 port')
})

// http client 例子

const client = http.get('http://127.0.0.1:3000', (clientRes) => {
  console.log('statusCode::', clientRes.statusCode, 'statusMessage:', clientRes.statusMessage)
  clientRes.pipe(process.stdout)
})



