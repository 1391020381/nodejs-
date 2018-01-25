const http = require('http')
const https = require('https')

const options = {
  protocol: 'http:',
  hostname: 'www.google.cn',
  port: '80',
  path: '/',
  method: 'GET'
}

const client = http.request(options, res => {
  let content = ''
  res.setEncoding('utf8')
  res.on('data', chunk => {
    content += chunk
  })
  res.on('end', () => {
    console.log('content:', content)
  })
})

client.end()