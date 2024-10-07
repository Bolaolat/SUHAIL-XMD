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
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "2347041039367,2349053332986";
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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_01_39_10_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAxNDMsXG4gICAgICAgIDk3LFxuICAgICAgICA2NyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMTAsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTYxLFxuICAgICAgICAxMCxcbiAgICAgICAgMTgzLFxuICAgICAgICA5MSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMzgsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNTYsXG4gICAgICAgIDE1OSxcbiAgICAgICAgOTUsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNjcsXG4gICAgICAgIDQ2LFxuICAgICAgICAxOTMsXG4gICAgICAgIDIyLFxuICAgICAgICAxNjMsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNzAsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNzYsXG4gICAgICAgIDIzLFxuICAgICAgICAxNSxcbiAgICAgICAgNTksXG4gICAgICAgIDEyNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3OCxcbiAgICAgICAgMTk0LFxuICAgICAgICAwLFxuICAgICAgICA0NSxcbiAgICAgICAgMTg3LFxuICAgICAgICAyNTUsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjExLFxuICAgICAgICAyMDksXG4gICAgICAgIDExNSxcbiAgICAgICAgNDEsXG4gICAgICAgIDg0LFxuICAgICAgICAyNixcbiAgICAgICAgMTMsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMzUsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMjIsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMzEsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMzQsXG4gICAgICAgIDUzLFxuICAgICAgICAxOTgsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMjUsXG4gICAgICAgIDE2NixcbiAgICAgICAgOTdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxODEsXG4gICAgICAgIDg1LFxuICAgICAgICAzMyxcbiAgICAgICAgOTQsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMzAsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNTYsXG4gICAgICAgIDM1LFxuICAgICAgICA2MCxcbiAgICAgICAgMTYyLFxuICAgICAgICA4OSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMjQsXG4gICAgICAgIDQwLFxuICAgICAgICAxMjYsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNzcsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjksXG4gICAgICAgIDEyNixcbiAgICAgICAgMTc5LFxuICAgICAgICAxNjYsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTksXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMTlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTgsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMTcsXG4gICAgICAgIDEzLFxuICAgICAgICAxNDgsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjU1LFxuICAgICAgICAyNTEsXG4gICAgICAgIDk4LFxuICAgICAgICA5MCxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNDYsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMTYsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNzksXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTc2LFxuICAgICAgICA5NixcbiAgICAgICAgNTIsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNzgsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMDYsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMCxcbiAgICAgICAgNzksXG4gICAgICAgIDE2NyxcbiAgICAgICAgNzVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNCxcbiAgICAgICAgNTEsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMDEsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE0MixcbiAgICAgICAgNjQsXG4gICAgICAgIDMzLFxuICAgICAgICAxNzQsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTE2LFxuICAgICAgICAxNjQsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjE1LFxuICAgICAgICA2MCxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMzksXG4gICAgICAgIDI1MSxcbiAgICAgICAgNSxcbiAgICAgICAgNjEsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMTIsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjExLFxuICAgICAgICAxNzYsXG4gICAgICAgIDE0LFxuICAgICAgICAxNjYsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTIwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyNixcbiAgICAgICAgMjM3LFxuICAgICAgICA2MyxcbiAgICAgICAgMjAyLFxuICAgICAgICA4NCxcbiAgICAgICAgMjAwLFxuICAgICAgICA3LFxuICAgICAgICAxMTgsXG4gICAgICAgIDEyLFxuICAgICAgICA3MyxcbiAgICAgICAgMTA4LFxuICAgICAgICAyNDgsXG4gICAgICAgIDY3LFxuICAgICAgICA4MyxcbiAgICAgICAgMTUsXG4gICAgICAgIDc3LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTI0LFxuICAgICAgICA3MCxcbiAgICAgICAgNzIsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNTgsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTE1LFxuICAgICAgICA2NSxcbiAgICAgICAgNDIsXG4gICAgICAgIDEsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTQ5LFxuICAgICAgICA1MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxNixcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgNjhcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgNSxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgOTFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0NSxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMTYsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNDksXG4gICAgICAgIDExOCxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMzIsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNjcsXG4gICAgICAgIDMwLFxuICAgICAgICAxMzQsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTgwLFxuICAgICAgICAyNSxcbiAgICAgICAgMTA5LFxuICAgICAgICA0NyxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMDEsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTc3LFxuICAgICAgICA1MyxcbiAgICAgICAgMTc0LFxuICAgICAgICA2MyxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMDUsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMjUsXG4gICAgICAgIDgzLFxuICAgICAgICAxNTIsXG4gICAgICAgIDI0MixcbiAgICAgICAgODgsXG4gICAgICAgIDkyLFxuICAgICAgICAxMixcbiAgICAgICAgMjA2LFxuICAgICAgICAxNTQsXG4gICAgICAgIDkxLFxuICAgICAgICA1MSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyNDUsXG4gICAgICAgIDk5LFxuICAgICAgICAxOTUsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNDYsXG4gICAgICAgIDEwLFxuICAgICAgICAxLFxuICAgICAgICAzMSxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNTksXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTY0LFxuICAgICAgICAxMDMsXG4gICAgICAgIDMxLFxuICAgICAgICA4NixcbiAgICAgICAgMTk3LFxuICAgICAgICAyMjQsXG4gICAgICAgIDJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE1OCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJtQkFoR3ZkU1RQME0xNEQ0THBEV2xucDlpUThZTDVzdE5KQjdUV281NDJvPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDkwNTMzMzI5ODZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjNBQ0JFQTMwQUVGRUJBNkFEMjQ2XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyODI2NTE2MVxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDkwNTMzMzI5ODZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjNBRUY0MjdBMzMwMUIxQzU1QzM5XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyODI2NTE2NFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ4eFlvQ3R3QlNzNkxzUFExdzgzLTNBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjYyYjNlYWU0LTMxMDEtNGIxZC1hODYzLWJkMTY5NmZmNzNiM1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxODMsXG4gICAgICAxMDgsXG4gICAgICA3MixcbiAgICAgIDU4LFxuICAgICAgNTYsXG4gICAgICAzMyxcbiAgICAgIDE4MixcbiAgICAgIDIzLFxuICAgICAgMzIsXG4gICAgICAxMjQsXG4gICAgICAxMzUsXG4gICAgICAyNyxcbiAgICAgIDE3MixcbiAgICAgIDEzLFxuICAgICAgNzEsXG4gICAgICAxNixcbiAgICAgIDEyOCxcbiAgICAgIDEyLFxuICAgICAgMSxcbiAgICAgIDIzOFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMjAsXG4gICAgICAxMDMsXG4gICAgICAxMzUsXG4gICAgICAyMTQsXG4gICAgICA4NSxcbiAgICAgIDEyMixcbiAgICAgIDcyLFxuICAgICAgMjQ3LFxuICAgICAgMjMzLFxuICAgICAgMTI5LFxuICAgICAgMTUxLFxuICAgICAgMTA3LFxuICAgICAgNzIsXG4gICAgICAxNjksXG4gICAgICAyMTYsXG4gICAgICA4OCxcbiAgICAgIDEzMixcbiAgICAgIDE5MCxcbiAgICAgIDE4NSxcbiAgICAgIDJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiRlFOQ1FZWkZcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkwNTMzMzI5ODY6MTNAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJgTE9SRE1CVENgXCIsXG4gICAgXCJsaWRcIjogXCIxNjI0OTIwNjgxNTk2Nzc6MTNAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSlRlb2I0SUVNSDNqTGdHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCI3aVJQaDNhbTZLVmxpaGxkSFBuajArWnFLQjF2azMvUGZzSmlIWjFuZHl3PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIm1NRlE5V3gxK25uSGhJeHdHTFlwMTZHdFRham9hcVEwckpvZ01odFNiYXIzVktPODBUbFdESitFZHRkODcwZ1lOU0tSamxISTFBdHJXZVZIYWthNWdRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInVQTUVsMEl2NGxPWTJEOVo2TmwrK2VDVXNKajNBRWQvM1RpazRtOVh6UVJtN3lnOEVZOWFXbkVDSmdBQ2Zxa3JMMnNzTzFTVWtnWDVjeVBya1grRUJBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkwNTMzMzI5ODY6MTNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgNDRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmlcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyODI2NTE1OCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUNHNlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQ0c2Lmpzb24iOiAie1wia2V5RGF0YVwiOlwidkl1bjJWemJJOU5Ia2pMTEUzWTNsQ01sOXFDejRrUmdzY2E0OWRoQVdyQT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyMjc4MDU5Nzk2LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMSwwXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjgyNjUxNTg2NjNcIn0iCn0="  // PUT your SESSION_ID 


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
