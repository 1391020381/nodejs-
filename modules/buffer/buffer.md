* JavaSctipt对字符串操作十分友好无论是单字节字符串还是宽字节字符串都被认为是一个字符串
     1. '0123456789'.length; // 10
     2. '零壹贰叁肆伍陆柒捌玖'.length; // 10 
# Buffer
## Buffer类的方法
* Buffer用于处理二进制数据流
* 实例类似整数数组,大小固定
* C++ 代码在V8堆外分 配物理内存
* Buffer.byteLength<一个中文三个字节>
* Buffer.isBuffer()
* Buffer.concat()

## Buffer实例的方法
* buf.length<只于初始化的空间大小有关>
* buf.toString()
* buf.fill()<填充>
* buf.equals()
* buf.indexOf()
* buf.copy()
* string_decoder<解决乱码>