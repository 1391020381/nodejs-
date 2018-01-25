# http
 1. 服务端server:接受来自客户端的请求,并将客户端请求的地址返回给客户端。
 2. 客户端client:向服务器发起请求,并将服务器返回的内容打印到控制台。
 
 * server:http.Server实例,用来提供服务,处理客户端的请求。
 * client:http.ClientRequest实例,用来向服务器发送请求。
 * serverReq/clientRes:其实都是http.IncomingMessage实例。serverReq用来获取客户端请求的相关信息,如reques header;而clientRes用来获取服务端返回的相关信息,比如response header
 * serverRes:http.ServerResponse实例
## 关于http.IncomingMessage、http.ServerResponse
* http.ServerResponse实例。服务端通过http.ServerResponse实例,来给请求方发送数据。包括发送响应表头,响应体等。
* http.IncomingMessage实例
  1. 在服务端:获取请求发送方的信息,比如请求方法、路径、传递的数据等。
  2. 在client端:获取server端发送过来的信息,比如请求方法、路径、传递的数据等。
  3. http.IncomingMessage实例有三个属性需要注意: method、statusCode、statusMessage。
    * method:只在server端的实例有(也就是serverReq.method)
    * statusCode/statusMessage:只在client端的实例有(也就是clientRes.statusCode,clientRes.statusMessage)
  
# 关于继承与扩展
 ## http.Server
 * http.Server继承了net.Server
 * net.createServer(fn),回调中的socket是个双工的stream接口,也就是说,读取发送方信息、向发送方发送信息都靠他。
 ## http.ClientRequest
  * http.ClientRequest内部创建了一个Socket来发起请求, http.request(options)内部是:
    self.onSocket(net.createConnection(options))
 ## http.ServerResponse
   * 实现了 Writable Stream interface，内部也是通过socket来发送信息。
 ## http.IncomingMessage
   *实现了 Readable Stream interfac,req.socket --> 获得跟这次连接相关的socket
   
 # 超时处理
  * response.setTimeout(msecs,callback)  