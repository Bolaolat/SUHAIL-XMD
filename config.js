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
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "2347041039367,2348164713237";
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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_08_08_10_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICA4NixcbiAgICAgICAgODksXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTc3LFxuICAgICAgICA2NCxcbiAgICAgICAgMzgsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNjYsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTkzLFxuICAgICAgICA3OSxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMTcsXG4gICAgICAgIDExMixcbiAgICAgICAgNjMsXG4gICAgICAgIDg0LFxuICAgICAgICAzMixcbiAgICAgICAgMTAwLFxuICAgICAgICAxNDcsXG4gICAgICAgIDY5LFxuICAgICAgICA3MSxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjE0LFxuICAgICAgICAxMDUsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNzIsXG4gICAgICAgIDQ0LFxuICAgICAgICA3MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODMsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMTgsXG4gICAgICAgIDk1LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNDcsXG4gICAgICAgIDY4LFxuICAgICAgICAxNDgsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTgyLFxuICAgICAgICAxMzMsXG4gICAgICAgIDczLFxuICAgICAgICAyMzUsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMzEsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjYsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNDIsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxOTgsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMDRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTIsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE2NSxcbiAgICAgICAgOTcsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNDcsXG4gICAgICAgIDYzLFxuICAgICAgICAxMjAsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMTUsXG4gICAgICAgIDE0MixcbiAgICAgICAgNDksXG4gICAgICAgIDE4NixcbiAgICAgICAgMTczLFxuICAgICAgICAyNDAsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMjYsXG4gICAgICAgIDQ5LFxuICAgICAgICA5OCxcbiAgICAgICAgMjE2LFxuICAgICAgICA1MyxcbiAgICAgICAgNzYsXG4gICAgICAgIDQyLFxuICAgICAgICAyNTIsXG4gICAgICAgIDgyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMDMsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNTIsXG4gICAgICAgIDEyLFxuICAgICAgICA0MSxcbiAgICAgICAgMTA3LFxuICAgICAgICAzMSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAzNSxcbiAgICAgICAgMjA2LFxuICAgICAgICAyNTEsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNTMsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTY5LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjYsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMzIsXG4gICAgICAgIDQzLFxuICAgICAgICAyMjIsXG4gICAgICAgIDFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNzAsXG4gICAgICAgIDE4LFxuICAgICAgICAxMDEsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMzMsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNzEsXG4gICAgICAgIDIzLFxuICAgICAgICAxNzksXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNTYsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTc3LFxuICAgICAgICAyNDYsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyLFxuICAgICAgICAxNDksXG4gICAgICAgIDk2LFxuICAgICAgICA0NixcbiAgICAgICAgMTQ0LFxuICAgICAgICA3NSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyNDMsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMzYsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTE3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTg5LFxuICAgICAgICA5MCxcbiAgICAgICAgNzcsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTgwLFxuICAgICAgICAyNTAsXG4gICAgICAgIDQ2LFxuICAgICAgICAxODksXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjEsXG4gICAgICAgIDE0LFxuICAgICAgICAyMDQsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMjUsXG4gICAgICAgIDI1MixcbiAgICAgICAgODEsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMzYsXG4gICAgICAgIDc2LFxuICAgICAgICAxMDYsXG4gICAgICAgIDg3LFxuICAgICAgICA0LFxuICAgICAgICAyNDMsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTgxLFxuICAgICAgICAzNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA3MixcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICA5MixcbiAgICAgICAgICA3NyxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgNzJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyOFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNDYsXG4gICAgICAgIDgzLFxuICAgICAgICAyMzYsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjM3LFxuICAgICAgICAxOTYsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjA3LFxuICAgICAgICAyNSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNDcsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMzAsXG4gICAgICAgIDIzLFxuICAgICAgICAyMzYsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNDIsXG4gICAgICAgIDExMixcbiAgICAgICAgMTQ5LFxuICAgICAgICAzNixcbiAgICAgICAgMTg1LFxuICAgICAgICA4MixcbiAgICAgICAgMTM5LFxuICAgICAgICAyMDIsXG4gICAgICAgIDI5LFxuICAgICAgICAxMCxcbiAgICAgICAgOTEsXG4gICAgICAgIDY4LFxuICAgICAgICA4NixcbiAgICAgICAgMjU1LFxuICAgICAgICAxNjMsXG4gICAgICAgIDYsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMzUsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTU2LFxuICAgICAgICAyNTUsXG4gICAgICAgIDI2LFxuICAgICAgICA4LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMSxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNDIsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMDAsXG4gICAgICAgIDU0LFxuICAgICAgICAxMjUsXG4gICAgICAgIDcyLFxuICAgICAgICAzMCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMzIsXG4gICAgICAgIDI1LFxuICAgICAgICAxNzMsXG4gICAgICAgIDgzLFxuICAgICAgICAxMzFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEyOSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCI1ZXd1bENZeVVSTlVXRW4vV1pxOUpEMjVVcjAyc0F5SlRtWHJYYVp0N3JVPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCI5T0ZHT2VhZVEwbXlrTjlIRFFzaFRRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjQxNzljODY5LWIxOGQtNGIyNS1iNDNiLTk1ZTcyMjg2MjNkNlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA2OSxcbiAgICAgIDE0MyxcbiAgICAgIDE5MCxcbiAgICAgIDk4LFxuICAgICAgMjgsXG4gICAgICA2OSxcbiAgICAgIDEwMSxcbiAgICAgIDE4MSxcbiAgICAgIDE3MyxcbiAgICAgIDE4NCxcbiAgICAgIDY0LFxuICAgICAgMTUxLFxuICAgICAgMTcsXG4gICAgICAyNTUsXG4gICAgICAxNTYsXG4gICAgICAxMTcsXG4gICAgICA0NyxcbiAgICAgIDIzNCxcbiAgICAgIDM3LFxuICAgICAgNDNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTkyLFxuICAgICAgMTA1LFxuICAgICAgMjUwLFxuICAgICAgOTIsXG4gICAgICAzMCxcbiAgICAgIDEzNixcbiAgICAgIDM1LFxuICAgICAgOTYsXG4gICAgICAxOTAsXG4gICAgICAxNTEsXG4gICAgICAxMjEsXG4gICAgICA2NSxcbiAgICAgIDE1OCxcbiAgICAgIDExNixcbiAgICAgIDIyNixcbiAgICAgIDY3LFxuICAgICAgMTQ2LFxuICAgICAgMTk0LFxuICAgICAgMTkxLFxuICAgICAgMTk3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkJSNDExQzhYXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MTY0NzEzMjM3OjMwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIzNTUxMTEwODQwNzQyNzozMEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJZjV0VmNRMUsyT3VBWVlBU0FBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImZHQVcybE9LbFNQMlpZWk1SNU9xWTgycFNVNEtYemtZOC8zajBKbi8zRmM9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiVUpyNGZWN0dJMDZLRTVlOWtCYURpNkQvcnRvWmhzUnVFSmtQRHZOcFk2NkwxazBjQ3QrcXZRUEFVOHBORjhaeVE4dzZuWEhML2lFTk9ScVVKOXFRREE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiN3pKWWxtZkZKUjhoUzh1WmIxaUdmSlFDaFRHamQ2NllDa3pZR0hzd2N6d09QTXZ0U1RLTTdXZDRuYzlVS3JPRndwK2VnNE1Rckh2WSt3UzE0TUpsaGc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODE2NDcxMzIzNzozMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAyMixcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICA3NixcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDg3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjgyODg0NzNcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


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
