# path
* path.normalize()
* path.join() (内部会调用path.normalize)
* path.resovle()<相对路径转换为绝对地址> 
*  basename,dirname,extname
* path.parse()<把路径解析为 basename,dirname,extname>
* path.format()<与 path.parse()相反 官网还有其他规则>

* sep
* delimiter
* win32
* posix
* __dirname、__filenmae总是返回文件的绝对路径
* process.cwd()总是返回执行node 命令所在的文件夹
* ./
  1. 在require()方法中总是相对当前文件夹(与__dirname、__filename相似)
  2. 在其他地方和process.cwd()一样,相对node启动的文件夹