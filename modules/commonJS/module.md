# commonJS
* 每个文件是一个模块,有自己的作用域
* 在模块内部 module变量代表模块本身
* module.exports 属性代表模块对外接口
# require规则
1. / 表示绝对路径, 。./表示相对于当前文件的
2.  支持js、json、node拓展名,不写依次尝试
3.  不写路径则认为是  build-in 模块或者各级 node_modules内的第三方模块
4. module被加载的时候执行,加载后缓存
5. 一旦出现某个模块被循环加载,就只输出已执行的部分,还未执行的部分不会输出

# exports 与 module.exports 
exports 是 module.exports的快捷键(在commonjs中 module.exports 是模块对外的输出, 不能修改 exports的指向。)

# global
1. commonJS
2. Buffer、process、console
3. timer