# 引子
在编写代码时,我们应该有一些方法将程序像连接水管一样连接起来--当我们需要获取一些数据时,可以出通过"拧"其他的部分来达到目的。这也应该是IO应有的方式。

# 流模块基础
在node中,一共有五种类型的流: readable,writable,transform,duplex以及classic

## pipe
无论哪种流,都会使用.pipe方法来实现输入和输出。

.pipe()函数很简单,它仅仅是接受一个源头src并将数据输出到一个可写的流dst中:

src.pipe(dst) 

src.pipe(dst)将会返回dst因此你可以链式调用多个流:

a.pipe(b).pipe(c).pipe(d)

等价于

* a.pipe(b)
* b.pipe(c)
* c.pipe(d)

# readable流
Readable流可以产出数据,你可以将这些数据传送到一个 writable,transform 或者 duplex 流中,只需要调用pipe()方法

readableStream.pipe(dst)

# writable流
一个writable流指的是只能流进不能流出的流

src.pipe(writableStream)

# transform 流
可以将 transform流想像成一个流的中间部分,它可以读也以写,但是并不保存数据,它只负责处理流经它的数据。
# duplex流
Duplex流是一个可读也可写的流