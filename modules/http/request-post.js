const http = require('http')
const querystring = require('querystring')

const createClientPostRequest = function () {
  const options = {
    method: 'POST',
    protocol: 'http:',
    hostname: '127.0.0.1',
    port: '3000',
    path: '/post',
    headers: {
      'connection': 'keep-alive',
      'content-type': 'application/x-www-form-urlencoded'
    }
  }
  // 发送给服务端的数据
  const postBody = {
    nick: 'chyingp'
  }
  // 创建客户端请求
  const client = http.request(options, res => {
    //  最终输出:Server got client data: nick=chyingp
    res.pipe(process.stdout)
  })
  // 发送的报文主体,记得先用 querystring.stringigy()处理下
  client.write(querystring.stringify(postBody))
  client.end()
}

// 服务端程序,只负责传回客户端数据

const server = http.createServer((req, res) => {
  res.write('Server got client data:')
  req.pipe(res)
})
server.listen(3000, createClientPostRequest())