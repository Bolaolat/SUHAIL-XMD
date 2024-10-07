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
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "2347041039367,2349036195730";
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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_01_19_10_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAxNTUsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMzYsXG4gICAgICAgIDExNCxcbiAgICAgICAgNDIsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMDUsXG4gICAgICAgIDk1LFxuICAgICAgICAxMzIsXG4gICAgICAgIDcxLFxuICAgICAgICAxOTEsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMyxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMzgsXG4gICAgICAgIDc3LFxuICAgICAgICAyMzQsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMyxcbiAgICAgICAgNjgsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNjYsXG4gICAgICAgIDg5LFxuICAgICAgICAxODUsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjQ4LFxuICAgICAgICA5MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5MCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMDcsXG4gICAgICAgIDY2LFxuICAgICAgICA0NixcbiAgICAgICAgNTMsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMzgsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNzMsXG4gICAgICAgIDgxLFxuICAgICAgICAyNDIsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNzQsXG4gICAgICAgIDEwMixcbiAgICAgICAgNDEsXG4gICAgICAgIDU5LFxuICAgICAgICAxNzcsXG4gICAgICAgIDExMixcbiAgICAgICAgMjQsXG4gICAgICAgIDIyLFxuICAgICAgICAxNzUsXG4gICAgICAgIDExMSxcbiAgICAgICAgNDAsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjEzLFxuICAgICAgICAyNDAsXG4gICAgICAgIDczLFxuICAgICAgICAxMDAsXG4gICAgICAgIDEyN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDkyLFxuICAgICAgICAxMjksXG4gICAgICAgIDE2NixcbiAgICAgICAgNDAsXG4gICAgICAgIDEzMixcbiAgICAgICAgOTUsXG4gICAgICAgIDYzLFxuICAgICAgICAxOTcsXG4gICAgICAgIDE4LFxuICAgICAgICAyNixcbiAgICAgICAgODYsXG4gICAgICAgIDE5LFxuICAgICAgICAxODAsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNzUsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNDgsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNTUsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjgsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMzEsXG4gICAgICAgIDYsXG4gICAgICAgIDY5LFxuICAgICAgICAyMzMsXG4gICAgICAgIDc1LFxuICAgICAgICAxMCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMDhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYxLFxuICAgICAgICAxODEsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTMxLFxuICAgICAgICA4MSxcbiAgICAgICAgMTg5LFxuICAgICAgICAyNDIsXG4gICAgICAgIDc5LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNTAsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTAxLFxuICAgICAgICA5NyxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNTEsXG4gICAgICAgIDEzLFxuICAgICAgICAyMzQsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTYxLFxuICAgICAgICA4MCxcbiAgICAgICAgMSxcbiAgICAgICAgMTIsXG4gICAgICAgIDMzLFxuICAgICAgICA0OSxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMjgsXG4gICAgICAgIDEzLFxuICAgICAgICAyNDksXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjMxLFxuICAgICAgICAzOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAxNjksXG4gICAgICAgIDM1LFxuICAgICAgICAyMDUsXG4gICAgICAgIDg5LFxuICAgICAgICAxNjYsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTksXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMTksXG4gICAgICAgIDE2MixcbiAgICAgICAgMzAsXG4gICAgICAgIDksXG4gICAgICAgIDIzLFxuICAgICAgICAyMDEsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjIsXG4gICAgICAgIDMwLFxuICAgICAgICAxMzgsXG4gICAgICAgIDExMixcbiAgICAgICAgNSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxOTMsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjAsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMDAsXG4gICAgICAgIDcyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2LFxuICAgICAgICAxMjksXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTIzLFxuICAgICAgICAzMyxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMjUsXG4gICAgICAgIDYzLFxuICAgICAgICAxNTAsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTA0LFxuICAgICAgICA5NixcbiAgICAgICAgNTksXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjYsXG4gICAgICAgIDg3LFxuICAgICAgICAyMjksXG4gICAgICAgIDExLFxuICAgICAgICAxNSxcbiAgICAgICAgNDYsXG4gICAgICAgIDIyLFxuICAgICAgICAzMSxcbiAgICAgICAgMTE4LFxuICAgICAgICAxODcsXG4gICAgICAgIDgxLFxuICAgICAgICAxMzUsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjM1LFxuICAgICAgICA2NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA0OCxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDksXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgOTZcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNyxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDExOVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMzIsXG4gICAgICAgIDY5LFxuICAgICAgICAyMDIsXG4gICAgICAgIDUxLFxuICAgICAgICA3NCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMzUsXG4gICAgICAgIDIxMyxcbiAgICAgICAgODUsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNzAsXG4gICAgICAgIDg1LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTU3LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTQxLFxuICAgICAgICAyMDUsXG4gICAgICAgIDM5LFxuICAgICAgICAxNDEsXG4gICAgICAgIDU5LFxuICAgICAgICAxNTIsXG4gICAgICAgIDExLFxuICAgICAgICAxOTQsXG4gICAgICAgIDk4LFxuICAgICAgICAxNDIsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjgsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTI2LFxuICAgICAgICA0NixcbiAgICAgICAgMTQzLFxuICAgICAgICAxNTcsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMDcsXG4gICAgICAgIDgxLFxuICAgICAgICA4NSxcbiAgICAgICAgMTUsXG4gICAgICAgIDE2NCxcbiAgICAgICAgODEsXG4gICAgICAgIDg3LFxuICAgICAgICAzNCxcbiAgICAgICAgMSxcbiAgICAgICAgNDUsXG4gICAgICAgIDIwMixcbiAgICAgICAgNTYsXG4gICAgICAgIDQ0LFxuICAgICAgICAxOTAsXG4gICAgICAgIDU1LFxuICAgICAgICA2NCxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMTQsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTMwLFxuICAgICAgICA2NixcbiAgICAgICAgODcsXG4gICAgICAgIDEzNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTYwLFxuICBcImFkdlNlY3JldEtleVwiOiBcIjYvdXluV2pwMVVXZFNzWkVIOFBrZWpjT1ZTOU9KdFg1c09oQU9jN0tvSWM9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0OTAzNjE5NTczMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiM0FENjM1RjRGMjlCRjNDMUJCQ0FcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzI4MjYzOTgzXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkdUd3I4RmNCUzUyZE5SSTl3aW93T3dcIixcbiAgXCJwaG9uZUlkXCI6IFwiODk3YzZhZTYtMDY5NS00M2QyLTk3ZjktMGJiNTZlN2E3YTEwXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDc2LFxuICAgICAgMTM0LFxuICAgICAgMTA3LFxuICAgICAgMjIzLFxuICAgICAgMTEzLFxuICAgICAgMjIwLFxuICAgICAgOTgsXG4gICAgICAyMzMsXG4gICAgICAxMjEsXG4gICAgICAyMDgsXG4gICAgICAxNTgsXG4gICAgICAxNjEsXG4gICAgICA0MSxcbiAgICAgIDIzOSxcbiAgICAgIDI0OSxcbiAgICAgIDIxMCxcbiAgICAgIDQ5LFxuICAgICAgODAsXG4gICAgICA5MixcbiAgICAgIDE0M1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNDAsXG4gICAgICAxNDQsXG4gICAgICAxOTksXG4gICAgICA0NyxcbiAgICAgIDMwLFxuICAgICAgMTc0LFxuICAgICAgMjQ1LFxuICAgICAgMTU5LFxuICAgICAgMTE3LFxuICAgICAgOTcsXG4gICAgICAzMixcbiAgICAgIDYxLFxuICAgICAgODYsXG4gICAgICA4NyxcbiAgICAgIDEyNixcbiAgICAgIDIxOCxcbiAgICAgIDE0MSxcbiAgICAgIDY2LFxuICAgICAgMjEwLFxuICAgICAgMTA5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjlDNVlES000XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MDM2MTk1NzMwOjI0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI0NTYwODYxMDA2NjYwMToyNEBsaWRcIixcbiAgICBcIm5hbWVcIjogXCJAR1BcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQalgydG9PRUtmdWpMZ0dHQXdnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImtYeG1odVl3d240Q216VSt2QldjNHhTUWYyeW9aL3FmZnZlU3N6Q21DakU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiTVNYM0tnbTVabUR3L2FJUzUrNGlEWTk1ZVNaL0Q5OXRYWGEyVnU3TURCUnBwMm04VEUvSGk2d3lod2kwVlFOalFOTTMwMjB1MFJKeVpWbHRSOHBmamc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiU2JNNmJLb1NPQ1JjWGxOZDQ5eitiUkJEZ2xmV21KOW1KNVJvbmJRQ0txdnFFSnJ4LzRsWGtYZ2t6bml2UFNKbkJ3aytmVVpuNDVYb3BLT2VZK2RMaGc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTAzNjE5NTczMDoyNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAyLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxMCxcbiAgICAgICAgICA0OVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiaXBob25lXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjgyNjM5NzgsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFDODdcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUM4Ny5qc29uIjogIntcImtleURhdGFcIjpcInNMUVhFSjUxazdaWUxwQ1YrNnd4c1VTbHJEYzBsWFYwQVF6Ny9WOHhLNTQ9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6Mzk0ODMyNTg4MCxcImN1cnJlbnRJbmRleFwiOjYsXCJkZXZpY2VJbmRleGVzXCI6WzEsMCw1LDNdfSxcInRpbWVzdGFtcFwiOlwiMTcyNzg3MzI2NDYwN1wifSIKfQ=="  // PUT your SESSION_ID 


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
