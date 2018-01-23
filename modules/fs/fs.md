# File System
文件 I/O 是对标准 POSIX 函数的简单封装。 通过 require('fs') 使用该模块。 所有的方法都有异步和同步的形式。

异步方法的最后一个参数都是一个回调函数。 传给回调函数的参数取决于具体方法，但回调函数的第一个参数都会保留给异常。 如果操作成功完成，则第一个参数会是 null 或 undefined。

当使用同步方法时，任何异常都会被立即抛出。 可以使用 try/catch 来处理异常，或让异常向上冒泡。
* fs.unlink('/tmp/hello',(err)=>{})  fs.unlinkSync(/tmp/hello)<删除文件>

1. readFile(),readFileSync()
2. writeFile(),writeFileSync()
3. exists(path,callback)<判断给定的路径是否存在,然后不管结果如何,都会调用回调函数。不要在open方法之前调用exists方法,open方法本身就能检测文件是否存在>
4. mkdir(),writeFile(),readFile()
5. mkdirSync(),writeFileSynce(),readFileSync()
6. readdir(),readdirSync()  <用于读取目录,返回一个所包含的文件和子目录的数组>
7. stat() stat方法的参数是一个文件或者目录,它产生一个对象,该对象包含了该文件或者目录的具体信息。我们往往通过该方法,判断正在处理的到底是一个文件还是目录。