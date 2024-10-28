
const fs = require('fs')
const chalk = require('chalk')

global.gr = 'https://whatsapp.com/channel/0029Vag3MeuGJP8LZb1Okj39'
global.ig = 'confronter._' // ubah aja
global.email = 'confrontermfisa@gmail.com' //serah
global.region = 'kenya' // serah
//—————「 Set Nama Own & Bot 」—————//
global.ownername = 'OBED' //ubah jadi nama mu, note tanda ' gausah di hapus!
//=================================================//
global.owner = ['254791637868'] // ubah aja pake nomor lu
//==========================zetsuboclient=======================//
global.botname = '𝐃𝐄𝐀𝐃𝐏𝐎𝐎𝐋-𝐕𝟑' //ubah jadi nama bot mu, note tanda ' gausah di hapus!
global.packname = '𝐃𝐄𝐀𝐃𝐏𝐎𝐎𝐋-𝐕𝟑' // ubah aja ini nama sticker
global.author = '𝐂𝐎𝐍𝐅𝐑𝐎𝐍𝐓𝐄𝐑' // ubah aja ini nama sticker
global.prefa = ['','!','.',',','🐤','🗿']
global.sessionName = 'session'  //Gausah Juga
global.sp = '⭔' // Gausah Juga
global.autoviewstatus = process.env.autoviewstatus || "TRUE"
global.wlcm = []
global.wlcmm = []
global.anticall = true
/*
Declaring Menu type

V1 = Photo
V2 = Video
V3 = Text
V4 = Button

*/
global.menutype = "v1"
//=================================================//
//Gausah Juga
global.limitawal = {
    premium: "Infinity",
    free: 5
}
//=================================================//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
