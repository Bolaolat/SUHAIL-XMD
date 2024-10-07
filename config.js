const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://whatsapp.com/channel/0029Vah3fKtCnA7oMPTPJm1h";
global.gurl  =process.env.GURL  || "";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Vah3fKtCnA7oMPTPJm1h" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© BLUE DEMON" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "2347041039367,2349164900158";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2347041039367";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "available" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_09_01_10_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAxODQsXG4gICAgICAgIDE5LFxuICAgICAgICAyMzcsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNzksXG4gICAgICAgIDQ2LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjM4LFxuICAgICAgICAxMDksXG4gICAgICAgIDIwNyxcbiAgICAgICAgNDksXG4gICAgICAgIDQyLFxuICAgICAgICAyNixcbiAgICAgICAgMTYzLFxuICAgICAgICA2NyxcbiAgICAgICAgODUsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjUwLFxuICAgICAgICA5MCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMDksXG4gICAgICAgIDgxLFxuICAgICAgICAxNTgsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMSxcbiAgICAgICAgOTgsXG4gICAgICAgIDEwMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTAsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTk5LFxuICAgICAgICAxMDUsXG4gICAgICAgIDU0LFxuICAgICAgICAxNjUsXG4gICAgICAgIDExMSxcbiAgICAgICAgNzgsXG4gICAgICAgIDcxLFxuICAgICAgICAxNDMsXG4gICAgICAgIDMwLFxuICAgICAgICAxNjksXG4gICAgICAgIDEwLFxuICAgICAgICAyMixcbiAgICAgICAgMjE3LFxuICAgICAgICAxNDIsXG4gICAgICAgIDU2LFxuICAgICAgICAzMixcbiAgICAgICAgNTcsXG4gICAgICAgIDgwLFxuICAgICAgICAxMTYsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMzQsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNTYsXG4gICAgICAgIDU5LFxuICAgICAgICA0MixcbiAgICAgICAgMTM3LFxuICAgICAgICAxNSxcbiAgICAgICAgMTIsXG4gICAgICAgIDI2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0OCxcbiAgICAgICAgNzAsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNTYsXG4gICAgICAgIDIwNyxcbiAgICAgICAgODksXG4gICAgICAgIDE0MyxcbiAgICAgICAgODMsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMzUsXG4gICAgICAgIDksXG4gICAgICAgIDExNyxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNTYsXG4gICAgICAgIDc4LFxuICAgICAgICAyMzksXG4gICAgICAgIDEwMixcbiAgICAgICAgMjcsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTkzLFxuICAgICAgICA4OSxcbiAgICAgICAgOTEsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjIsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMzYsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTQsXG4gICAgICAgIDI5LFxuICAgICAgICAxMDJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA5LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjAyLFxuICAgICAgICAyOCxcbiAgICAgICAgNzUsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjQwLFxuICAgICAgICAxNzYsXG4gICAgICAgIDIyLFxuICAgICAgICA4MSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNixcbiAgICAgICAgMTE4LFxuICAgICAgICAxLFxuICAgICAgICAxODIsXG4gICAgICAgIDcsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjI0LFxuICAgICAgICA4LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxODYsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTcxLFxuICAgICAgICAxMCxcbiAgICAgICAgMTQ2LFxuICAgICAgICA3NyxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNzYsXG4gICAgICAgIDQ0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjgsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMDAsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNTgsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTMsXG4gICAgICAgIDYwLFxuICAgICAgICAyMTgsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMDEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjgsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjUsXG4gICAgICAgIDU5LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMjUsXG4gICAgICAgIDk3LFxuICAgICAgICAyLFxuICAgICAgICA2MyxcbiAgICAgICAgMTc3LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAzMyxcbiAgICAgICAgNDMsXG4gICAgICAgIDEwN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTksXG4gICAgICAgIDYzLFxuICAgICAgICAxODcsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjEsXG4gICAgICAgIDkwLFxuICAgICAgICAxNTUsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMTQsXG4gICAgICAgIDIyMCxcbiAgICAgICAgODQsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTc3LFxuICAgICAgICAwLFxuICAgICAgICAxOTUsXG4gICAgICAgIDQ1LFxuICAgICAgICAzNCxcbiAgICAgICAgMTI4LFxuICAgICAgICA2NCxcbiAgICAgICAgMTY0LFxuICAgICAgICA5MyxcbiAgICAgICAgMTUwLFxuICAgICAgICAyNDgsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxODQsXG4gICAgICAgIDc2LFxuICAgICAgICA3M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgNjdcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDExN1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMzLFxuICAgICAgICA4OSxcbiAgICAgICAgMTM2LFxuICAgICAgICAyNDIsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTYxLFxuICAgICAgICAyNTUsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTk4LFxuICAgICAgICA2MCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNDMsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxODYsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTM1LFxuICAgICAgICAzOCxcbiAgICAgICAgNjEsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMzAsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjMyLFxuICAgICAgICAyNDEsXG4gICAgICAgIDgwLFxuICAgICAgICAxMDYsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNjYsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTM5LFxuICAgICAgICA4LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMTYsXG4gICAgICAgIDkwLFxuICAgICAgICAxMzYsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTYxLFxuICAgICAgICA1MCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMSxcbiAgICAgICAgMjE3LFxuICAgICAgICA2MSxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMjMsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTY1LFxuICAgICAgICAyNDMsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMTAsXG4gICAgICAgIDAsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTIzLFxuICAgICAgICAxNDgsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNyxcbiAgICAgICAgMjM2LFxuICAgICAgICAxOTksXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTMxXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA2OCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCIzQkhKaDU4WjdzdGJ2NVhKVmRTL0VJTUxMenNoN2JJQ0cwME0rYjNVUWtZPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDkxNjQ5MDAxNThAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjZBNzQxNUMzNjc4MjFDM0ZGNDRGOUIzQTMxQjQ2QkRBXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyODI5MTY4MlxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDkxNjQ5MDAxNThAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkVERjhDMDYzNDZDNkIwQjZBOTRFQkM4RTQ1NEMxNkE4XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyODI5MTY4M1xuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJPcFkycUFhZFFYS3NrYzVlemZGRlVnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjIwNTM3NmYwLTZiMTYtNDQ4Zi04NmZlLTBhNWUxYjA3Y2I3M1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNTUsXG4gICAgICAxNyxcbiAgICAgIDg3LFxuICAgICAgMjEyLFxuICAgICAgMTI0LFxuICAgICAgNjIsXG4gICAgICAyMDEsXG4gICAgICAzOSxcbiAgICAgIDIxOCxcbiAgICAgIDE1NCxcbiAgICAgIDE2OCxcbiAgICAgIDIyMSxcbiAgICAgIDExMyxcbiAgICAgIDg5LFxuICAgICAgMTA1LFxuICAgICAgODIsXG4gICAgICAyMDAsXG4gICAgICAxNTksXG4gICAgICAxNzMsXG4gICAgICAyMThcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTEzLFxuICAgICAgMjI5LFxuICAgICAgOTQsXG4gICAgICAxNjMsXG4gICAgICAxMjAsXG4gICAgICAxNjMsXG4gICAgICAyMTAsXG4gICAgICAyMjEsXG4gICAgICAxNzgsXG4gICAgICAxNjMsXG4gICAgICA3NCxcbiAgICAgIDM1LFxuICAgICAgODcsXG4gICAgICA0OCxcbiAgICAgIDExMSxcbiAgICAgIDIxNyxcbiAgICAgIDE3NixcbiAgICAgIDk3LFxuICAgICAgMjgsXG4gICAgICAxMDNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiNzNZSDVOS1dcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkxNjQ5MDAxNTg6NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIlBhcHB5XCIsXG4gICAgXCJsaWRcIjogXCIyMzk0MDU1MDM4NTgxODo2QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0xLMTlZSUdFTnJHanJnR0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwieTk0eWs2eGhlZFpHUTcvWUpXcjRrc1FjeGVKVEdjMG5NN3hxOWdhK1NFST1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCIvNDhQMHM0VUkwa0lPalJRdUw1d2NabC9vd3hKR3ZjNDZCVDNHaTBZUUtrZytML0JTRHcxQWNzelkvcjh0OG1PUkRkcEpzbVlyY0VVVDlnVkZ6eVpEdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJwMW14WkdpQlNMMnhBS1Z6QlYxejdOcVdZa0xRRGRFODNjY0xSbnFrRFdsTnI5S2JpeXpnOXVuemFzU1liRHI3RnJ0THkveitKV2pYT1RTMTErTlRoUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MTY0OTAwMTU4OjZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICA2LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICA3MixcbiAgICAgICAgICA2NlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzI4MjkxNjc4LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRzVKXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFHNUouanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "BLUE DEMON",
  ownername:process.env.OWNER_NAME|| "BLUE DEMON",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
