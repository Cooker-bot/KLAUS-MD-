// config.js
const fs = require("fs");
require("dotenv").config();

const config = {
  SESSION_ID: process.env.SESSION_ID || ""noiseKey":{"private":{"type":"Buffer","data":"6KjpUI6EoJ1jIkUdtqWMdFY1h+kulhvFSE5pMMA4OHA="},"public":{"type":"Buffer","data":"6YYcpsw/DrHL5gfO3IU7dYSDF3NAQs9xVapVyop3ujs="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"4J2NlUPARpYKeQ1KkDTkSUnTr78WnOm/HHqi6l24yEk="},"public":{"type":"Buffer","data":"YWO/O9XjSa+ERkZR8D3s3wcRbdwjxHEknqkpnc+Ki0k="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"aM7WueXYGszyh9ZlanO1BdBzEVowdSlBNIg57t3GpVQ="},"public":{"type":"Buffer","data":"FquGyNzw8LD+Exwk40aewsMFbfhUNXrMHILXXOrLxVE="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"aFTRId2qckMPhwUZSMJeE7sCGzs/7PDZVaeZlZzOjnw="},"public":{"type":"Buffer","data":"vicRX0CKgOTJ9TAxczXSkzM4cn/YQZJ1QFviGqaMCn8="}},"signature":{"type":"Buffer","data":"JQASn6SdywCNsuU2k0dd840BEMg48xU6JrpIBbKKuIHNeN+Hv1DSNRo9/DT8wzLP37eiZ0VybB5h1p08gHTQiQ=="},"keyId":1},"registrationId":84,"advSecretKey":"6SIcPpzy9N4fnykeXOMSFiWI4nsfPNILfYDL8mwPJwo=","processedHistoryMessages":[],"nextPreKeyId":31,"firstUnuploadedPreKeyId":31,"accountSyncCounter":0,"accountSettings":{"unarchiveChats":false},"deviceId":"Jl_pGIpiTuKkKHQZy0z8Pw","phoneId":"062a7183-c510-40ce-91ad-28e4930fc70e","identityId":{"type":"Buffer","data":"rHYaxH/QxROPSw/cWRFotkpT/0o="},"registered":true,"backupToken":{"type":"Buffer","data":"4HG/psfopcVg6fwrHRI/9raJttA="},"registration":{},"pairingCode":"XV6KXWN6","me":{"id":"50941720067:11@s.whatsapp.net","lid":"278142300221583:11@lid"},"account":{"details":"COGAxp8EELi/+7wGGAkgACgA","accountSignatureKey":"bkIUMHpB+Zg54mB22DjkZHRl8+j9COzi4WuqdzvvBSE=","accountSignature":"JrEcLza73HYH7sbOszI2kXfm6PSzS5YrmhA2ioTDXFNF+QWwwtGroMzQKbPJAVdBtRXQORBQqctcJO/qa33pCw==","deviceSignature":"Eh2KWprt9N1YZI3fx22DL7a078X5nrp8wFQ85P8NebQl5QSoWMpgeAHWYY9TErUYXVnSxf+Sw9S4KX/uTte6hw=="},"signalIdentities":[{"identifier":{"name":"50941720067:11@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"BW5CFDB6QfmYOeJgdtg45GR0ZfPo/Qjs4uFrqnc77wUh"}}],"platform":"android","lastAccountSyncTimestamp":1738465211,"myAppStateKeyId":"AAAAAEuz"}",
  AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN !== undefined ? process.env.AUTO_STATUS_SEEN === 'true' : true, 
  AUTO_DL: process.env.AUTO_DL !== undefined ? process.env.AUTO_DL === 'true' : false,
  AUTO_READ: process.env.AUTO_READ !== undefined ? process.env.AUTO_READ === 'true' : false,
  AUTO_TYPING: process.env.AUTO_TYPING !== undefined ? process.env.AUTO_TYPING === 'true' : true,
  AUTO_RECORDING: process.env.AUTO_RECORDING !== undefined ? process.env.AUTO_RECORDING === 'true' : false,
  ALWAYS_ONLINE: process.env.ALWAYS_ONLINE !== undefined ? process.env.ALWAYS_ONLINE === 'true' : true,
  AUTO_REACT: process.env.AUTO_REACT !== undefined ? process.env.AUTO_REACT === 'true' : false,
   /*auto block only for 212 */
  AUTO_BLOCK: process.env.AUTO_BLOCK !== undefined ? process.env.AUTO_BLOCK === 'true' : true,
  
  
  REJECT_CALL: process.env.REJECT_CALL !== undefined ? process.env.REJECT_CALL === 'true' : false, 
  NOT_ALLOW: process.env.NOT_ALLOW !== undefined ? process.env.NOT_ALLOW === 'true' : true,
  MODE: process.env.MODE || "private",
  OWNER_NAME: process.env.OWNER_NAME || "[RAYTO]",
  OWNER_NUMBER: process.env.OWNER_NUMBER || "50941720067",
  GEMINI_KEY: process.env.GEMINI_KEY || "AIzaSyCUPaxfIdZawsKZKqCqJcC-GWiQPCXKTDc",
  WELCOME: process.env.WELCOME !== undefined ? process.env.WELCOME === 'true' : false, 
  YTDL_NO_UPDATE: process.env.YTDL_NO_UPDATE !== undefined ? process.env.YTDL_NO_UPDATE === 'true' : true,
};


module.exports = config;
