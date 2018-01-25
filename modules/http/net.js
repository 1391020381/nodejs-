// 参考: https://cnodejs.org/topic/4fb1c1fd1975fe1e1310490b

const net = require('net')
const PORT = 8989


const server = net.createServer(socket => {  // socket 为 'connection'事件自动设置一个监听器,而 connection 事件是 <net.Socket> connection对象
  console.log('Connected:', socket.remoteAddress, ':', socket.remotePort)
  socket.on('data', data => {
    socket.write('Data from you is :', data)
  })
  socket.on('close', () => {
    console.log('connecting is break off ')
  })
})
server.listen(PORT, () => {
  console.log('server bound')
})