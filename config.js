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
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "2347041039367,22892439409";
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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_20_11_10_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAxODUsXG4gICAgICAgIDE4NCxcbiAgICAgICAgOTksXG4gICAgICAgIDEzMixcbiAgICAgICAgMjYsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTEsXG4gICAgICAgIDcsXG4gICAgICAgIDEwLFxuICAgICAgICA0NixcbiAgICAgICAgMjM5LFxuICAgICAgICA5OSxcbiAgICAgICAgNjQsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjEwLFxuICAgICAgICAxOTAsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNyxcbiAgICAgICAgNDAsXG4gICAgICAgIDY5LFxuICAgICAgICAxMzEsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMDcsXG4gICAgICAgIDkyLFxuICAgICAgICAxLFxuICAgICAgICAyMCxcbiAgICAgICAgMTczLFxuICAgICAgICAxMjNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjEwLFxuICAgICAgICAyNDAsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTk4LFxuICAgICAgICAyNDEsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMTIsXG4gICAgICAgIDc4LFxuICAgICAgICAxMTMsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjQ3LFxuICAgICAgICA4MCxcbiAgICAgICAgMTE1LFxuICAgICAgICA0MSxcbiAgICAgICAgOSxcbiAgICAgICAgMjQxLFxuICAgICAgICA0OCxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMTMsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNjYsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMzgsXG4gICAgICAgIDk3LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE3LFxuICAgICAgICAxOTAsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICA5MyxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMDQsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjMsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMDQsXG4gICAgICAgIDAsXG4gICAgICAgIDksXG4gICAgICAgIDIwLFxuICAgICAgICAxMDYsXG4gICAgICAgIDE0LFxuICAgICAgICAxNTQsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNzksXG4gICAgICAgIDIxMixcbiAgICAgICAgMTEyLFxuICAgICAgICAxMDYsXG4gICAgICAgIDU0LFxuICAgICAgICA0OCxcbiAgICAgICAgMjQyLFxuICAgICAgICA1MyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMTIsXG4gICAgICAgIDkyLFxuICAgICAgICA3MixcbiAgICAgICAgNDksXG4gICAgICAgIDQzLFxuICAgICAgICA5MyxcbiAgICAgICAgODFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAyMzAsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNjksXG4gICAgICAgIDk4LFxuICAgICAgICAyLFxuICAgICAgICAyNTQsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNTksXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTk1LFxuICAgICAgICAyMTUsXG4gICAgICAgIDUwLFxuICAgICAgICAxODQsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNTAsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNDEsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjA1LFxuICAgICAgICA5MSxcbiAgICAgICAgMTMsXG4gICAgICAgIDY3LFxuICAgICAgICAxNTcsXG4gICAgICAgIDEyLFxuICAgICAgICAxNTksXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgsXG4gICAgICAgIDgxLFxuICAgICAgICAxODgsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTczLFxuICAgICAgICAyMzYsXG4gICAgICAgIDQyLFxuICAgICAgICAzMSxcbiAgICAgICAgNCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMzYsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjI2LFxuICAgICAgICAxODcsXG4gICAgICAgIDYxLFxuICAgICAgICA2LFxuICAgICAgICAxNzksXG4gICAgICAgIDE5NyxcbiAgICAgICAgNTUsXG4gICAgICAgIDQsXG4gICAgICAgIDExNCxcbiAgICAgICAgNDksXG4gICAgICAgIDYyLFxuICAgICAgICAxMCxcbiAgICAgICAgMTgwLFxuICAgICAgICAyNDksXG4gICAgICAgIDc2LFxuICAgICAgICA2NCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMDUsXG4gICAgICAgIDEwNCxcbiAgICAgICAgODdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjM2LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNTcsXG4gICAgICAgIDEzMCxcbiAgICAgICAgOTcsXG4gICAgICAgIDUyLFxuICAgICAgICA4MyxcbiAgICAgICAgNzQsXG4gICAgICAgIDIsXG4gICAgICAgIDc3LFxuICAgICAgICAyNDYsXG4gICAgICAgIDI1LFxuICAgICAgICAyMTUsXG4gICAgICAgIDI4LFxuICAgICAgICA2MixcbiAgICAgICAgMTUxLFxuICAgICAgICA1OSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxOTksXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNDIsXG4gICAgICAgIDU5LFxuICAgICAgICAxMzEsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNDksXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTE0LFxuICAgICAgICAyNCxcbiAgICAgICAgMTFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDEwMlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxOCxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDEyM1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0OSxcbiAgICAgICAgMCxcbiAgICAgICAgNzIsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNzcsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNzIsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTgwLFxuICAgICAgICAxMTEsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjIxLFxuICAgICAgICAyNTUsXG4gICAgICAgIDU2LFxuICAgICAgICAyMzMsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTQwLFxuICAgICAgICAyNDIsXG4gICAgICAgIDcsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjEsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNDgsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMTIsXG4gICAgICAgIDAsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjI3LFxuICAgICAgICAxMDYsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTk1LFxuICAgICAgICA3MSxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE4LFxuICAgICAgICA3LFxuICAgICAgICAxMzUsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMzYsXG4gICAgICAgIDM4LFxuICAgICAgICA1NixcbiAgICAgICAgMTYyLFxuICAgICAgICAzLFxuICAgICAgICAxMzgsXG4gICAgICAgIDIyNixcbiAgICAgICAgMCxcbiAgICAgICAgOTAsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNzYsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMzcsXG4gICAgICAgIDkxLFxuICAgICAgICAxMCxcbiAgICAgICAgNDUsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjQ0LFxuICAgICAgICA0MCxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMjUsXG4gICAgICAgIDIwLFxuICAgICAgICAyMzgsXG4gICAgICAgIDE0MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTY1LFxuICBcImFkdlNlY3JldEtleVwiOiBcIlRzdzZOYU92NkU4eE1RV3p5ZDdaaWZhSVloOXVYOWZJNGh5SC9OVXNPRjQ9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImkxZmZRZ3pYUVV1dktiWjMtcUNNTkFcIixcbiAgXCJwaG9uZUlkXCI6IFwiM2NlZDE3NzQtNmQyYy00YWE3LTk3ZmUtY2ViZTRhMmIyMjBlXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDMwLFxuICAgICAgMTE5LFxuICAgICAgMjUwLFxuICAgICAgMjI4LFxuICAgICAgMTgwLFxuICAgICAgMTkyLFxuICAgICAgMTUzLFxuICAgICAgNzYsXG4gICAgICA1NixcbiAgICAgIDcsXG4gICAgICAyMSxcbiAgICAgIDkzLFxuICAgICAgODEsXG4gICAgICAyNTMsXG4gICAgICA1MCxcbiAgICAgIDIyNyxcbiAgICAgIDE4NyxcbiAgICAgIDEwMCxcbiAgICAgIDY5LFxuICAgICAgMTExXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMzMsXG4gICAgICAxODksXG4gICAgICAwLFxuICAgICAgNDEsXG4gICAgICAyMjQsXG4gICAgICAyMDQsXG4gICAgICAyMTksXG4gICAgICAxODYsXG4gICAgICA4NCxcbiAgICAgIDE4NyxcbiAgICAgIDEwNyxcbiAgICAgIDI0MyxcbiAgICAgIDExOSxcbiAgICAgIDEzMixcbiAgICAgIDk5LFxuICAgICAgMTYxLFxuICAgICAgMTk2LFxuICAgICAgNzQsXG4gICAgICA0LFxuICAgICAgOTdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPU0ExcWtCRU02NmhyZ0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImVvOWJNRXZvZjZJVE8vbWxLRC9VMVZQYTJ6SmMxTEFzQ21Zd0ZMMEJmQjQ9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiNXNjZFVWdmZhLzhLcUpMdjZ6RS9xOENJN1U2OFBlcG5vOTZjdEg2NlJ2NzA4QzJSQ0VWTW5yNEJ0UmpmYnV3TVZ3VXZxckozei95c1QvVWFMTDB1aGc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwidytPVyt0ejR1ajFpNklKWDFBa1RTVmUzMGVveTJjSkdVa0pTb0ZBN1JCQnFmZkdWVm11NXFLR2FTMFFnY2VYblg3WTZzaHZKTGVhUTBmQ2VucjJmaVE9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMjg5MjQzOTQwOTo1NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIvCdkJLwnZCL8J2asPCdmrMg8J2aqfCdkJTwnZCL8J2Qi/CdmrXwnZq7ICjwnZCL8J2aqyDwnZqu8J2ar/CdmrspXCIsXG4gICAgXCJsaWRcIjogXCIxNjIyNjM4ODEyMzIzOTg6NTVAbGlkXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMjg5MjQzOTQwOTo1NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDMwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJpXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjgxNTkwNThcbn0iCn0="  // PUT your SESSION_ID 


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
