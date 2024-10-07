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
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "2347041039367,2347068110998";
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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_01_19_10_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDE2MixcbiAgICAgICAgNzUsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxODMsXG4gICAgICAgIDIwLFxuICAgICAgICAxOTIsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNTYsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMixcbiAgICAgICAgMTY2LFxuICAgICAgICAxNzAsXG4gICAgICAgIDczLFxuICAgICAgICAyMzEsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTg3LFxuICAgICAgICAyNDgsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjUzLFxuICAgICAgICAzMSxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMTIsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE3NCxcbiAgICAgICAgOTcsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTIxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY1LFxuICAgICAgICAyMzUsXG4gICAgICAgIDkwLFxuICAgICAgICA2LFxuICAgICAgICA5NixcbiAgICAgICAgMzMsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNTMsXG4gICAgICAgIDI3LFxuICAgICAgICA1LFxuICAgICAgICAxNTksXG4gICAgICAgIDIzNyxcbiAgICAgICAgNTYsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMjQsXG4gICAgICAgIDExNixcbiAgICAgICAgMjM2LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxOTEsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNSxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMTEsXG4gICAgICAgIDcyLFxuICAgICAgICAxOTksXG4gICAgICAgIDEyLFxuICAgICAgICAyMjUsXG4gICAgICAgIDQ2LFxuICAgICAgICA0NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjA4LFxuICAgICAgICA1OCxcbiAgICAgICAgMTAsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjgsXG4gICAgICAgIDE3LFxuICAgICAgICAxOTUsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNDYsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjM0LFxuICAgICAgICAyMTcsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMzUsXG4gICAgICAgIDIxLFxuICAgICAgICA4NCxcbiAgICAgICAgNCxcbiAgICAgICAgMTQ5LFxuICAgICAgICA2MCxcbiAgICAgICAgMjgsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNjgsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTI2LFxuICAgICAgICA3MyxcbiAgICAgICAgMTIxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTY3LFxuICAgICAgICA4MSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNDMsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMTksXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMzgsXG4gICAgICAgIDI0NCxcbiAgICAgICAgODMsXG4gICAgICAgIDE2NCxcbiAgICAgICAgODgsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMixcbiAgICAgICAgMjA4LFxuICAgICAgICAxODYsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTMyLFxuICAgICAgICAxNDYsXG4gICAgICAgIDk3LFxuICAgICAgICA1MixcbiAgICAgICAgMTYxLFxuICAgICAgICAxMixcbiAgICAgICAgMTI0LFxuICAgICAgICAyNDYsXG4gICAgICAgIDk5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzYsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNzksXG4gICAgICAgIDc2LFxuICAgICAgICA3NCxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNDcsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjQsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMzYsXG4gICAgICAgIDEyLFxuICAgICAgICAxNDgsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMixcbiAgICAgICAgMTkzLFxuICAgICAgICA2NyxcbiAgICAgICAgODksXG4gICAgICAgIDIxNixcbiAgICAgICAgMjMyLFxuICAgICAgICA3MyxcbiAgICAgICAgMTk1LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMDYsXG4gICAgICAgIDEzNCxcbiAgICAgICAgODQsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTEzLFxuICAgICAgICA3MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTEsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMyxcbiAgICAgICAgNDEsXG4gICAgICAgIDE5NixcbiAgICAgICAgNTYsXG4gICAgICAgIDE0MixcbiAgICAgICAgODQsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMzksXG4gICAgICAgIDEwOCxcbiAgICAgICAgNTMsXG4gICAgICAgIDg2LFxuICAgICAgICA5MyxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMTgsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTk4LFxuICAgICAgICA4MSxcbiAgICAgICAgMjE1LFxuICAgICAgICA2MCxcbiAgICAgICAgMTAwLFxuICAgICAgICA2OSxcbiAgICAgICAgMTcxLFxuICAgICAgICAzMyxcbiAgICAgICAgMjA4LFxuICAgICAgICA2MSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNDQsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgNjdcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDQ3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMDksXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTExLFxuICAgICAgICAyMzksXG4gICAgICAgIDEzMixcbiAgICAgICAgNDYsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTE2LFxuICAgICAgICAzOCxcbiAgICAgICAgMTY4LFxuICAgICAgICAzMSxcbiAgICAgICAgMTg4LFxuICAgICAgICAyNixcbiAgICAgICAgNzQsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjM0LFxuICAgICAgICAyMDQsXG4gICAgICAgIDEwLFxuICAgICAgICAyNDksXG4gICAgICAgIDE1LFxuICAgICAgICAyMTEsXG4gICAgICAgIDM4LFxuICAgICAgICA4OCxcbiAgICAgICAgMjcsXG4gICAgICAgIDQzLFxuICAgICAgICAyMDksXG4gICAgICAgIDUwLFxuICAgICAgICAxNTEsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMixcbiAgICAgICAgMjA2LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTY2LFxuICAgICAgICA3MixcbiAgICAgICAgMjM2LFxuICAgICAgICA1NyxcbiAgICAgICAgMixcbiAgICAgICAgMjIsXG4gICAgICAgIDAsXG4gICAgICAgIDQ4LFxuICAgICAgICA2OCxcbiAgICAgICAgODUsXG4gICAgICAgIDM5LFxuICAgICAgICAxOSxcbiAgICAgICAgMTUxLFxuICAgICAgICAyNTUsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNzcsXG4gICAgICAgIDg5LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjMxLFxuICAgICAgICA4NixcbiAgICAgICAgMTczLFxuICAgICAgICAxMTQsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjM2LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE0MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjQ4LFxuICBcImFkdlNlY3JldEtleVwiOiBcInl2ZzVyR0tDTzVReXhuNnp4MFYxWC9ZazRQdDhkSDcvUnFjNFRZSWYyQkE9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0NzA2ODExMDk5OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiM0EwMjM3OEQ4RDE5MEVGQUVDNUVcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzI4MjYzOTQ4XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0NzA2ODExMDk5OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiM0EwMkM4OEYyOTM1Rjg1MjBDNTFcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzI4MjYzOTUyXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImFTUEhLczJDU0tlUVpuYWo5dEhITHdcIixcbiAgXCJwaG9uZUlkXCI6IFwiNDI1NzVkYjctMjRlZC00MjIyLTg5MTctNzUzNzg5Yzc5MWQyXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIzNixcbiAgICAgIDM4LFxuICAgICAgNixcbiAgICAgIDI4LFxuICAgICAgMTY5LFxuICAgICAgNjIsXG4gICAgICAxODcsXG4gICAgICAzNCxcbiAgICAgIDE2NyxcbiAgICAgIDE5MCxcbiAgICAgIDE2MixcbiAgICAgIDE1OCxcbiAgICAgIDc5LFxuICAgICAgMyxcbiAgICAgIDIwMyxcbiAgICAgIDE0NixcbiAgICAgIDE2MCxcbiAgICAgIDE3MixcbiAgICAgIDE2NCxcbiAgICAgIDgwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDkxLFxuICAgICAgMTU4LFxuICAgICAgMTQsXG4gICAgICAxNDEsXG4gICAgICAxNDIsXG4gICAgICAyMTIsXG4gICAgICAxOTUsXG4gICAgICAxNzcsXG4gICAgICAyMzUsXG4gICAgICAyMjcsXG4gICAgICA0NCxcbiAgICAgIDIzNyxcbiAgICAgIDIwNCxcbiAgICAgIDQzLFxuICAgICAgMTIyLFxuICAgICAgMTYxLFxuICAgICAgMTg1LFxuICAgICAgMTMsXG4gICAgICAxNzMsXG4gICAgICAyMjFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiNUg2UUdRNlJcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDcwNjgxMTA5OTg6NzVAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjQ3NTYzMDA0NzIzNDMzOjc1QGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIk1CVENcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNObmw1dEFGRUlUdWpMZ0dHQU1nQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlBOeDZydXdGZkR6YytoeU1ZdjNET2FZS0lwTXRSZS9JR25iSkRLUmJBU3c9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiR2lnTHc5RnNvMk9QcEVtYXZseXRuM0ZLd215Z3pLMGNDVjRkSWlOTExDU25nTGZtU2FrYnpUVVpXR3I0Z3c4OTdXdXdOT0NGOGFGZWN1eWFKQ0hkZ3c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiRE5EL3NJeVlhSGtTSUNFaWJvL0ZHMTA3UEtobFVzZjdlM0J1YWVham9pRGw5ZDVMaE9qOTdLVWFwclhZRTNPcFZmUDR3VHJvVTZKdUo5SExuZkI0alE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0NzA2ODExMDk5ODo3NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDQ0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJpcGhvbmVcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyODI2Mzk0NCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUovb1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSi9vLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


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
