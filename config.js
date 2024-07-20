const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_06_54_07_20_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAyMTEsXG4gICAgICAgIDE2LFxuICAgICAgICA3MCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMDYsXG4gICAgICAgIDUyLFxuICAgICAgICA1LFxuICAgICAgICA5MSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNjgsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMzMsXG4gICAgICAgIDY5LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMDgsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTQ4LFxuICAgICAgICA4OSxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNixcbiAgICAgICAgODEsXG4gICAgICAgIDE0LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNDEsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMjYsXG4gICAgICAgIDEyNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDUsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTk1LFxuICAgICAgICA4MSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMjYsXG4gICAgICAgIDE2MixcbiAgICAgICAgODMsXG4gICAgICAgIDE5MixcbiAgICAgICAgNTAsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNDMsXG4gICAgICAgIDk5LFxuICAgICAgICAyNDYsXG4gICAgICAgIDAsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNTIsXG4gICAgICAgIDk3LFxuICAgICAgICAxOTUsXG4gICAgICAgIDg1LFxuICAgICAgICA2NSxcbiAgICAgICAgMjQ4LFxuICAgICAgICA1LFxuICAgICAgICAyNDEsXG4gICAgICAgIDExNixcbiAgICAgICAgNzIsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNzEsXG4gICAgICAgIDY3LFxuICAgICAgICA1MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICA4MixcbiAgICAgICAgMjAzLFxuICAgICAgICAxNDQsXG4gICAgICAgIDUyLFxuICAgICAgICAxNzUsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMSxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMjIsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNTQsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNDYsXG4gICAgICAgIDIyNixcbiAgICAgICAgMzAsXG4gICAgICAgIDMzLFxuICAgICAgICAyMDMsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMzgsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjQsXG4gICAgICAgIDg2LFxuICAgICAgICAxNDQsXG4gICAgICAgIDEwMixcbiAgICAgICAgMzMsXG4gICAgICAgIDgsXG4gICAgICAgIDEwLFxuICAgICAgICAxMjdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzUsXG4gICAgICAgIDQwLFxuICAgICAgICAxODIsXG4gICAgICAgIDY5LFxuICAgICAgICA2MCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMDIsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNSxcbiAgICAgICAgNzAsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMTksXG4gICAgICAgIDI0OCxcbiAgICAgICAgMzYsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMjAsXG4gICAgICAgIDIsXG4gICAgICAgIDE3LFxuICAgICAgICAxMzksXG4gICAgICAgIDY4LFxuICAgICAgICA1NyxcbiAgICAgICAgMTksXG4gICAgICAgIDE3MixcbiAgICAgICAgMTUyLFxuICAgICAgICAxOSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNjUsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMjRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxOTcsXG4gICAgICAgIDUsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMDMsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjQ1LFxuICAgICAgICAyNDcsXG4gICAgICAgIDI0LFxuICAgICAgICA4NixcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMTUsXG4gICAgICAgIDEyLFxuICAgICAgICAyMixcbiAgICAgICAgMTYwLFxuICAgICAgICA5MixcbiAgICAgICAgMTIwLFxuICAgICAgICA1NCxcbiAgICAgICAgMTcwLFxuICAgICAgICA1OCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNTMsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxODMsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjI2LFxuICAgICAgICAwLFxuICAgICAgICA3MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzYsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxOTQsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNzQsXG4gICAgICAgIDEwNCxcbiAgICAgICAgODEsXG4gICAgICAgIDU4LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjgsXG4gICAgICAgIDUzLFxuICAgICAgICAxMzQsXG4gICAgICAgIDIzLFxuICAgICAgICAyNTUsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTk4LFxuICAgICAgICAyNTAsXG4gICAgICAgIDg2LFxuICAgICAgICA0NSxcbiAgICAgICAgMjEsXG4gICAgICAgIDI5LFxuICAgICAgICAxNDMsXG4gICAgICAgIDU1LFxuICAgICAgICAxNzYsXG4gICAgICAgIDM5LFxuICAgICAgICA0NixcbiAgICAgICAgOTUsXG4gICAgICAgIDUyLFxuICAgICAgICAxMDAsXG4gICAgICAgIDkzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEzNixcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTAwXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDc3LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTE3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA5LFxuICAgICAgICA4MyxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE3MixcbiAgICAgICAgNzQsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMTgsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMzgsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMzEsXG4gICAgICAgIDE5LFxuICAgICAgICAxODYsXG4gICAgICAgIDg0LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE0LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTA4LFxuICAgICAgICAxMixcbiAgICAgICAgMjEwLFxuICAgICAgICAxNDQsXG4gICAgICAgIDEzMixcbiAgICAgICAgNTAsXG4gICAgICAgIDQwLFxuICAgICAgICA2OSxcbiAgICAgICAgMjU0LFxuICAgICAgICAyNyxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNixcbiAgICAgICAgMjEwLFxuICAgICAgICA3MSxcbiAgICAgICAgMTEzLFxuICAgICAgICAzNyxcbiAgICAgICAgMTA1LFxuICAgICAgICAyNSxcbiAgICAgICAgMTI4LFxuICAgICAgICAzLFxuICAgICAgICAxMTMsXG4gICAgICAgIDU0LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNjUsXG4gICAgICAgIDE1NCxcbiAgICAgICAgODksXG4gICAgICAgIDUyLFxuICAgICAgICA0OSxcbiAgICAgICAgMTY4LFxuICAgICAgICA3NCxcbiAgICAgICAgMTMyLFxuICAgICAgICAyOCxcbiAgICAgICAgOTIsXG4gICAgICAgIDk3LFxuICAgICAgICA5NSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNTYsXG4gICAgICAgIDM1LFxuICAgICAgICAxMTcsXG4gICAgICAgIDYzLFxuICAgICAgICAwXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA4MixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJESFR2ZDBOcDBWeHVFVVYrQ1RTOXBrdC80KzRRNE5rYWJSdlNkeVFlQmJvPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzQyOTMyMzAyNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiNTU2MTQ2M0Y3NUNCQjk3NjJCREQxODJGMzcwNjI2MTdcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIxNDU4NDQwXG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzNDI5MzIzMDI0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJCODdCQkMwQ0UwOUE0NkRGMDQ3QTI5MUJENTRBNDAzN1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjE0NTg0NDBcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiMVBMZU9UMTJRMTYwVWVuTjZRLXNYd1wiLFxuICBcInBob25lSWRcIjogXCI0YmUyMzYyMi03NTAwLTQ4NjgtYWQyYS00Yjg1YzEzMzg2NWVcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjM3LFxuICAgICAgOSxcbiAgICAgIDQsXG4gICAgICAyMCxcbiAgICAgIDE2MyxcbiAgICAgIDEwNyxcbiAgICAgIDE0MyxcbiAgICAgIDE5NixcbiAgICAgIDE2MyxcbiAgICAgIDE3MCxcbiAgICAgIDIyOCxcbiAgICAgIDIyOSxcbiAgICAgIDIzLFxuICAgICAgMjI3LFxuICAgICAgMjE2LFxuICAgICAgMjQ2LFxuICAgICAgMTQwLFxuICAgICAgMTE5LFxuICAgICAgMTEzLFxuICAgICAgNDBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMzcsXG4gICAgICAyMTAsXG4gICAgICAyMSxcbiAgICAgIDc4LFxuICAgICAgMTEzLFxuICAgICAgMjUsXG4gICAgICA2NSxcbiAgICAgIDExLFxuICAgICAgMjI2LFxuICAgICAgMjI0LFxuICAgICAgNCxcbiAgICAgIDIzLFxuICAgICAgMTYxLFxuICAgICAgNTUsXG4gICAgICAyMTEsXG4gICAgICAzNixcbiAgICAgIDIzMixcbiAgICAgIDg5LFxuICAgICAgMjI5LFxuICAgICAgOTVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiMlkzWFNGWUdcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzQyOTMyMzAyNDo3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxODkxMjUxNjAzNDk5NDk6N0BsaWRcIixcbiAgICBcIm5hbWVcIjogXCJBbm9ueW1vdXMgQmFja3VwIPCfmYJcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPM0R3NEVDRVA2OTdiUUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkdOTnpLL3EvVTNEQmJpNFQyM2IrSW5uaFpxSTZkdHNBNDNEaVNRWmxXbms9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiYldGZDd3UTdaY3ZVaEdLc3FoVWkwTUJYMUJwWTh2RXJxRWdnMDZpN3lKcTBJU1BaMXZVK0tlZGtUR1BhOURibG84ZFJxRGtUQ2N0dnQ4dlc3NnBBQmc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiRjVaK1ZzWGprYVNkLzBTWW5BNTAzc1dsUHhtRlNFdi9hd3kzSTFyQmVtYnVGN0NtbDRWdFlvbm95N0MweEphRDlFM0xjaXJoVzcwMG9rR241NkJBQ0E9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzNDI5MzIzMDI0OjdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMCxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxMjFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTQ1ODQzNCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUZnNFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRmc0Lmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
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
