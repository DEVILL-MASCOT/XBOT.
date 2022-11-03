const fs = require('fs')
const chalk = require('chalk')

global.powner = ['918130784851']

global.site = ['https://github.com/NEXUSAT12/']

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
