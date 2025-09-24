// Importing OS-Module
const os = require('os');

// info about current user 
// const user = os.userInfo()
// console.log(user)

//  Method returns the system uptime in seconds 
// console.log(`The System Uptime us ${os.uptime()} seconds`);

// get information about our system
const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freemem: os.freemem()
};
console.log(currentOS);