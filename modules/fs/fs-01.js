const _dirname = require('../../config').__dirname
const fs = require('fs')
const path = require('path')

fs.readFile(path.join(_dirname, '/static/1.txt'), (err, data) => {
	if (err) throw err
	console.log('data:', data.toString())
})

let text = fs.readFileSync(path.join(_dirname, '/static/1.txt'), 'utf-8')
console.log('text:', text)

fs.exists(path.join(_dirname, '/static/1.txt'), (exists) => {
	console.log('exists:', exists)
})

fs.readdir(process.cwd(), (err, files) => {  // 用于读取目录,返回一个所包含的文件和子目录的数组
	if (err) {
		console.log(err)
		return
	}
	console.log('files:', files)
})

// stat
fs.readdir(path.join(_dirname, '/modules'), (err, files) => {
	// console.log('stat:', files)    // [ 'buffer', 'commonJS', 'debug.js', 'events', 'fs', 'path', 'stream' ]
	let tempFile = [], tempDir = [], tempStats = []
	files.forEach((file, index) => {
		// fs.stat(path.join(_dirname, '/modules', file), (err, stats) => {
		//     if (err) throw err
		//     console.log('isFile:', stats.isFile(), 'isDirectory:', stats.isDirectory())
		//     if (stats.isFile()) {
		//       tempFile.push(file)
		//     } else if (stats.isDirectory()) {
		//       tempDir.push(file)
		//     }
		//     // console.log('stats:', stats)
		//   }
		// )
		tempStats.push({stats: fs.statSync(path.join(_dirname, '/modules', file)), index: index})
	})
	// console.log('tempStsts:', tempStats)
	tempStats.forEach(i => {
		if (i.stats.isFile()) {
			tempFile.push(files[i.index])
		} else if (i.stats.isDirectory()) {
			tempDir.push(files[i.index])
		}
	})

	console.log('tempFile:', tempFile, 'tempDir:', tempDir)
})


