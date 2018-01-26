// 客户端

const https = require('https')

// https.get('https://www.baidu.com', res => {
//   res.on('data', data => {
//     process.stdout.write(data)
//   }).on('error', err => {
//     console.log(err)
//   })
// })

var options = {
  hostname: 'kyfw.12306.cn',
  path: '/otn/leftTicket/init',
  rejectUnauthorized: false  // 忽略安全警告
}

var req = https.get(options, function (res) {
  res.pipe(process.stdout)
})

req.on('error', function (err) {
  console.error(err.code)
})
