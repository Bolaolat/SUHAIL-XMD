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
global.github=process.env.GITHUB|| "";
global.gurl  =process.env.GURL  || "";
global.website=process.env.GURL || "" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "2347041039367,2349112847805";
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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_00_41_10_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDMwLFxuICAgICAgICAxNzQsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNzksXG4gICAgICAgIDUyLFxuICAgICAgICAyNSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAzNixcbiAgICAgICAgMTMxLFxuICAgICAgICAzMCxcbiAgICAgICAgMTExLFxuICAgICAgICAxODgsXG4gICAgICAgIDg2LFxuICAgICAgICAyMjksXG4gICAgICAgIDE4MixcbiAgICAgICAgNTMsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTIsXG4gICAgICAgIDkzLFxuICAgICAgICAxMjcsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMjcsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMTEsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjI5LFxuICAgICAgICA2NixcbiAgICAgICAgMTk0LFxuICAgICAgICAxMDhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODEsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTcxLFxuICAgICAgICAyNDcsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE1NSxcbiAgICAgICAgOTMsXG4gICAgICAgIDE0OSxcbiAgICAgICAgOTgsXG4gICAgICAgIDQwLFxuICAgICAgICA5MSxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMTgsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMDgsXG4gICAgICAgIDE3LFxuICAgICAgICA3NCxcbiAgICAgICAgMjcsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMzAsXG4gICAgICAgIDM5LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMzksXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjE2LFxuICAgICAgICA3NyxcbiAgICAgICAgOThcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MCxcbiAgICAgICAgNDQsXG4gICAgICAgIDE1NyxcbiAgICAgICAgODcsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTExLFxuICAgICAgICAxODgsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTgsXG4gICAgICAgIDc2LFxuICAgICAgICAxMzMsXG4gICAgICAgIDcxLFxuICAgICAgICAyMzIsXG4gICAgICAgIDg2LFxuICAgICAgICAxNjIsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMSxcbiAgICAgICAgMTQsXG4gICAgICAgIDI2LFxuICAgICAgICA3NixcbiAgICAgICAgMTY4LFxuICAgICAgICA4NyxcbiAgICAgICAgMTUsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjU1LFxuICAgICAgICAxMTcsXG4gICAgICAgIDksXG4gICAgICAgIDE1LFxuICAgICAgICA0NixcbiAgICAgICAgMzMsXG4gICAgICAgIDEyOCxcbiAgICAgICAgODJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTAyLFxuICAgICAgICAyMTQsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTc0LFxuICAgICAgICA1OCxcbiAgICAgICAgNTMsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMzEsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTk5LFxuICAgICAgICA3MSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMjUsXG4gICAgICAgIDE0LFxuICAgICAgICA2MixcbiAgICAgICAgODgsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTQ2LFxuICAgICAgICA2OCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE2MSxcbiAgICAgICAgODQsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMTksXG4gICAgICAgIDM0LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMzgsXG4gICAgICAgIDVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcyLFxuICAgICAgICA4NSxcbiAgICAgICAgMjE1LFxuICAgICAgICA4MixcbiAgICAgICAgMTE5LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjE3LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTU4LFxuICAgICAgICAxOTksXG4gICAgICAgIDE3NixcbiAgICAgICAgMTQ5LFxuICAgICAgICA0MSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNzAsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNDQsXG4gICAgICAgIDk3LFxuICAgICAgICAxOTgsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTE3LFxuICAgICAgICA5OCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMTEsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTMsXG4gICAgICAgIDAsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA2LFxuICAgICAgICAxNyxcbiAgICAgICAgMTU0LFxuICAgICAgICA5MCxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMTIsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTc3LFxuICAgICAgICAyOSxcbiAgICAgICAgOSxcbiAgICAgICAgMjQ5LFxuICAgICAgICA5NixcbiAgICAgICAgMTU4LFxuICAgICAgICAyMDQsXG4gICAgICAgIDcwLFxuICAgICAgICAyMTcsXG4gICAgICAgIDE1MixcbiAgICAgICAgNDIsXG4gICAgICAgIDE4MixcbiAgICAgICAgOTcsXG4gICAgICAgIDg5LFxuICAgICAgICAyMTgsXG4gICAgICAgIDEyLFxuICAgICAgICA0OSxcbiAgICAgICAgOTQsXG4gICAgICAgIDY2LFxuICAgICAgICAyMjYsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTc1LFxuICAgICAgICAyNixcbiAgICAgICAgMTI4LFxuICAgICAgICA1MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDEyNFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxMTVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjgsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTc0LFxuICAgICAgICAyMixcbiAgICAgICAgMTc1LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE4NSxcbiAgICAgICAgODAsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMTYsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMDMsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNSxcbiAgICAgICAgMTQxLFxuICAgICAgICAyNSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjQyLFxuICAgICAgICAxNTcsXG4gICAgICAgIDgxLFxuICAgICAgICA1NixcbiAgICAgICAgMTk3LFxuICAgICAgICAzOCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxODksXG4gICAgICAgIDU0LFxuICAgICAgICAxOTcsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMSxcbiAgICAgICAgMjgsXG4gICAgICAgIDE4MCxcbiAgICAgICAgODEsXG4gICAgICAgIDExOSxcbiAgICAgICAgNTYsXG4gICAgICAgIDExNixcbiAgICAgICAgMjE5LFxuICAgICAgICAxOTUsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTEwLFxuICAgICAgICAyNDIsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMTMsXG4gICAgICAgIDMzLFxuICAgICAgICAxODcsXG4gICAgICAgIDMwLFxuICAgICAgICA3MixcbiAgICAgICAgMjQwLFxuICAgICAgICA3NyxcbiAgICAgICAgNzAsXG4gICAgICAgIDE4NixcbiAgICAgICAgMzIsXG4gICAgICAgIDE1MyxcbiAgICAgICAgOCxcbiAgICAgICAgMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTY5LFxuICBcImFkdlNlY3JldEtleVwiOiBcIkgwcTVjZW94U01XOE5ZNEdqNmxvMkdNekhtMlBrQzJZWUFyOHFBSm9GMWM9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0OTExMjg0NzgwNUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMjJDN0UxQjREOEQ1Njk0QUIzMjVDRTZCMzBBOUY4NEVcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzI4MjYxNjg3XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjR3YjF3Z0hxUTcyYjRSR3N5MnBFTmdcIixcbiAgXCJwaG9uZUlkXCI6IFwiNTVlNzA1Y2UtNDMzZS00ZGY1LTk5YjYtMjBjODFkZTQzNmY2XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEzMixcbiAgICAgIDg4LFxuICAgICAgMjIwLFxuICAgICAgMTQ3LFxuICAgICAgMTgzLFxuICAgICAgMTA0LFxuICAgICAgMTE3LFxuICAgICAgMTI0LFxuICAgICAgMjIzLFxuICAgICAgNDgsXG4gICAgICAxNjksXG4gICAgICA4LFxuICAgICAgMjA1LFxuICAgICAgMjE2LFxuICAgICAgMjM4LFxuICAgICAgNDQsXG4gICAgICA3LFxuICAgICAgMTU0LFxuICAgICAgMjM3LFxuICAgICAgMTU5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE5MyxcbiAgICAgIDE0MCxcbiAgICAgIDEwMyxcbiAgICAgIDEwNyxcbiAgICAgIDE2OSxcbiAgICAgIDE2OCxcbiAgICAgIDEyMyxcbiAgICAgIDEwMCxcbiAgICAgIDc0LFxuICAgICAgNDAsXG4gICAgICA5NSxcbiAgICAgIDE0MCxcbiAgICAgIDQ4LFxuICAgICAgMTE0LFxuICAgICAgODAsXG4gICAgICAyMTgsXG4gICAgICAxNzMsXG4gICAgICAyOSxcbiAgICAgIDE3NSxcbiAgICAgIDEyNVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJNSzQ5TFlLTlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTExMjg0NzgwNToyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiQmFlYmlpX0FuZ2VsXCIsXG4gICAgXCJsaWRcIjogXCIxNjAzMjcxMzYyMjc0MDI6MkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNdjBqb0lERUszY2pMZ0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImxuWDYrMFpxWUFUQkczOXkvTlJjRUIwcTlialRFbE9ST0dhVmcvY3ViUW89XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiM0pBVC9oQjRsQ2N1TFVHWVhvekV5WENPdHVkYXBYblpPT3BVYlVHQXJLUy9WSlJQYXVMd3JucVhQcFJJTmVTWHdyWHhsZmFLOEtWSkZOMDV4eitOQVE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiY0hTS1g2VDcvZTQxR2dNRlltR0FHRXZOWTN0bHpLSWlYUHROMm53dWhFSUU1eTZYSHVSdVNsMCtUQXNkK2ZZSnRTRGJhYUZhd3R3Wmt6cXQ4ZUlOQnc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTExMjg0NzgwNToyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICA5NixcbiAgICAgICAgICA0LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyODI2MTY4MVxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


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


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
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
