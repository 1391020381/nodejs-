// buf.copy(target[, targetStart[, sourceStart[, sourceEnd]]])
// 创建两个Buffer 实例 buf1 与buf2,并拷贝 buf1中第16个至第19个字节到 buf2第8个字节起

const buf1 = Buffer.allocUnsafe(26)
const buf2 = Buffer.allocUnsafe(26).fill('!')

for (let i = 0; i < 26; i++) {
  // 97 是 a的十进制 ASCII值
  buf1[i] = i + 97
}
buf1.copy(buf2, 8, 16, 20)

console.log(buf2.toString('ascii', 0, 25))