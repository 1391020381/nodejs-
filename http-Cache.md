 [http缓存](https://mp.weixin.qq.com/s?__biz=MzAxODE2MjM1MA==&mid=2651553545&idx=2&sn=71efd68546b1c34485c0133053d4c693&chksm=8025a8c8b75221dedd749d7c3fab852850198384b8dfee2f57e3986cd27fdd674a6986e96d8b&mpshare=1&scene=23&srcid=0122KGTiwUa4AI15ATCbYQ2x#rd)
 # http报文中与缓存相关的首部字段
 ## 通用首部字段(就是请求报文和响应报文都能用上的字段)
 |     字段名称    |        说明
 |-----------------|:-------:|     
 |Cache-Control    |      控制缓存的行为 no-cache<不直接使用缓存,要向服务器发起(新鲜度校验)请求>、max-age=delta-seconds告知客户端该资源在 delta-seconds秒内是新鲜的,无需向服务器发请求|
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
 
 # 缓存校验字段
 * Pragma和 Cache-Control均能让客户端决定是否向服务器发送请求,缓存时间为过期,那么直接使用本地缓存。
 但向服务器发送了请求,不一定要读取回该资源的整个实体内容,如果服务器并没有更新过这个资源,直接告诉浏览器直接用缓存(304)。
    1. Last-Modified
       *  If-Modified-Since: Last-Modified-value
       * 
    2. ETag<服务器会通过某种算法，给资源计算得出一个唯一标志符（比如md5标志），在把资源响应给客户端的时候，会在实体首部加上“ETag: 唯一标识符”一起返回给客户端。>
 * Pragma字段的优先级会比Expires(相对服务器的时间)更高。
 * 有了Pragma来禁用缓存,自然也需要有个东西来启用缓存和定义缓存时间,对http1.0而言,Expires就是做这件事的首部字段。Expires的值对应一个GMT（格林尼治时间），比如“Mon, 22 Jul 2002 11:12:01 GMT”来告诉浏览器资源缓存过期时间，如果还没过该时间点则不发请求。
 * Cache-Control是一个通用的首部字段,在请求和响应中使用。"Cache-Control" ":" cache-directive" ,cache-directive有很多不同的取值。  
 * http1.1新增了 Cache-Control 来定义缓存过期时间，若报文中同时出现了 Pragma、Expires 和 Cache-Control，会以 Cache-Control 为准。
 * 如果 Last-Modified 和 ETag 同时被使用，则要求它们的验证都必须通过才会返回304，若其中某个验证没通过，则服务器会按常规返回资源实体及200状态码。
 
 # 缓存实践
 当我们在一个项目上做http缓存的应用时,我们还是会把上述提及的大多数首部字段均使用上,例如使用Expires来兼容旧的浏览器,使用Cache-Control来更精准地利用缓存,然后开启ETag跟Last-Modified功能进一步复用缓存减少流量。
 
 * http://i.gtimg.cn/vipstyle/vipportal/v4/img/common/logo.png?max_age=2592000
 
 
 1. 询问缓存是否更新:根据 If-Modified-Since/ETag等协议向后端请求询问是否更新,没有更新返回304,浏览器使用本地缓。
 2. 直接使用本地缓存:根据协议里的Cache-Control/Expires字段去确定多长时间内不出请求询问更新,直接使用本地缓存。
 
 
 [browser http cache](https://juejin.im/post/5a673af06fb9a01c927ed880?utm_source=gold_browser_extension)
