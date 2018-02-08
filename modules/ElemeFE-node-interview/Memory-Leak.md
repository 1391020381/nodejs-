1. 内存泄漏(Memory Leak)指由于疏忽或错误造成程序未能释放已经不再存在的内存的情况。
# GC in Node.js (Garbage Collection ,垃圾回收) 
在V8中,每次GC时,是根据root对象(浏览器环境下的 window,Node.js环境下的 global)依次梳理对象的引用,如果能从root的引用链到达访问,V8就将其标记为可到达对象,反之为不可到达对象。被标记为不可到达对象(即无引用的对象)后就会被V8回收。
[解读 V8 GC](http://alinode.aliyun.com/blog/37)
