// //  Read File Asynchronously - 1st way 
// const { readFile } = require('fs')

// const getText = (path) => {
//     return new Promise((resolve, reject) => {
//         readFile(path, 'utf-8', (err, data) => {
//             if(err){
//                 reject(err);
//             }else{
//                 resolve(data);
//             }
//         })
//     })
// };

// const start = async() => {
//     try{
//         const first = await getText('./content/first.txt');
//         const second = await getText('./content/second.txt');
//         console.log(first, second);
//     }
//     catch (error){
//         console.log(error)
//     }
    
// }

// start()

// Second easy way 
const {readFile, writeFile, write} = require('fs');
const util = require('util');
const readFilePromise = util.promisify(readFile);
const writeFilePromise = util.promisify(writeFile)

const start = async() => {
    try{
        const first = await readFilePromise('./content/first.txt', 'utf-8');
        const second = await readFilePromise('./content/second.txt', 'utf-8');
        await writeFilePromise('./content/result-mind-grenade', `This is awesome ${first}, ${second}`);
        console.log(first, second);
    }
    catch(err){
        console.log(err)
    }
}
start()