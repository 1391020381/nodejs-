/**
 * argv
 * argb0
 * execArgv
 * execPath
 */
const {argv,argv0,execArgv,execPath} = process

// node process.js --test a=1 b=2
//argv: [ 'C:\\dev\\nodejs\\node.exe',
//   'E:\\Node\\nodejs-learning\\modules\\commonJS\\process.js',
//   '--test',
//   'a=1',
//   'b=2' ]
console.log('argv:',argv)

// argv0 是 argv的引用
console.log('argv0:',argv0)

// node --inspect process.js
// execArgv: [ '--inspect' ]
console.log('execArgv:',execArgv)
console.log('execPath:',execPath)

/**
 * process.env  
 * process.cwd()  当前 process执行的路径
 * 
 */
setImmediate(()=>{   // 下一个队列

})

setTimeout(()=>{

})
process.nextTick(()=>{  

})

// nextTick在本次队列的末尾

// setImmediate 下次队列的首位

// setTimeout在两者中间
