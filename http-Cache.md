 [http缓存](https://mp.weixin.qq.com/s?__biz=MzAxODE2MjM1MA==&mid=2651553545&idx=2&sn=71efd68546b1c34485c0133053d4c693&chksm=8025a8c8b75221dedd749d7c3fab852850198384b8dfee2f57e3986cd27fdd674a6986e96d8b&mpshare=1&scene=23&srcid=0122KGTiwUa4AI15ATCbYQ2x#rd)
 # http报文中与缓存相关的首部字段
 ## 通用首部字段(就是请求报文和响应报文都能用上的字段)
 |     字段名称    |        说明
 |-----------------|:-------:|     
 |Cache-Control    |      控制缓存的行为|
 |Pragma           |   http1.0的旧社会遗留物,值为'no-cache'时禁用缓存  |
 
 ## 请求首部
 | 字段名称 | 说明
 |----------|:----:|
 | if-Match | 比较ETag是否一致|
 | if-None-Match|比较ETag是否不一致|
 |if-Modified-Since|比较资源最后最新的时间是否一致|
 | if-Unmodified-Since| 比较资源最后更新的时间是否不一致|
 ## 响应首部字段
 |字段名称|说明|
 |--------:|:----|
 |ETag|资源的匹配信息|
 ## 实体首部字段
 | 字段名称|说明|
 |---------:|:---|
 |Expires| http1.0的遗留物,实体主体过期的时间|
 | Last-Modified|资源的最后一次修改的时间|
 
 * Pragma字段的优先级会比Expires(相对服务器的时间)更高。
 * 有了Pragma来禁用缓存,自然也需要有个东西来启用缓存和定义缓存时间,对http1.0而言,Expires就是做这件事的首部字段。Expires的值对应一个GMT（格林尼治时间），比如“Mon, 22 Jul 2002 11:12:01 GMT”来告诉浏览器资源缓存过期时间，如果还没过该时间点则不发请求。
 * Cache-Control是一个通用的首部字段,在请求和响应中使用。"Cache-Control" ":" cache-directive" ,cache-directive有很多不同的取值。  
 * http1.1新增了 Cache-Control 来定义缓存过期时间，若报文中同时出现了 Pragma、Expires 和 Cache-Control，会以 Cache-Control 为准。
 * 如果 Last-Modified 和 ETag 同时被使用，则要求它们的验证都必须通过才会返回304，若其中某个验证没通过，则服务器会按常规返回资源实体及200状态码。
 
 # 缓存实践
 当我们在一个项目上做http缓存的应用时,我们还是会把上述提及的大多数首部字段均使用上,例如使用Expires来兼容旧的浏览器,使用Cache-Control来更精准地利用缓存,然后开启ETag跟Last-Modified功能进一步复用缓存减少流量。
 
 * http://i.gtimg.cn/vipstyle/vipportal/v4/img/common/logo.png?max_age=2592000
 
 
 [browser http cache](https://juejin.im/post/5a673af06fb9a01c927ed880?utm_source=gold_browser_extension)