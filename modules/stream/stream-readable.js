const Readable = require('stream').Readable

const rs = new Readable
// rs.push('beep')
// rs.push('boop\n')
// rs.push(null)
let c = 97
rs._read = function () {
	rs.push(String.fromCharCode(c++))
	if (c > 'z'.charCodeAt(0)) rs.push(null)
}
rs.pipe(process.stdout)

/**
 * rs.push(null)的作用是告诉rs输出数据应该结束了。
 * 需要注意的一点是我们在将数据输出到process.stdout之前将内容推送 readable流rs中,但是所有的数据依然是可写的。
 *
 * 这是因为在你使用.push()将数据推进一个readable流中时,一直要到另一个东西来消耗数据之前,数据都在一个缓存中,只有当数据消耗者出现时，数据才会真正实现推送。
 * **/