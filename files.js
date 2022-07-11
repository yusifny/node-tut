let c = console;
// let os = require('os');

// console.log(os.platform(), os.homedir());

let fs = require('fs');


// Reads specified file's content
fs.readFile('./docs/test.txt', 'UTF-8', (err, data)=>{
    if (err) throw err;
    c.log(data);
})

// Creates file and writes content
fs.writeFile('./docs/test2.txt', 'Hello, World!', (err)=>{
    if(err) throw err;
    c.log('File created!');
})

// Deletes file
fs.unlink('./assets/text.txt', (err)=>{
    if(err) throw err.message;
    c.log('File deleted');
})

// Creating folder
fs.mkdir('./assets', (err) => {
    if(err) throw err.message;
    c.log('Folder created!');
})

// Deleting folder
fs.rmdir('./assets', (err)=>{
    if(err) throw err.message;
    c.log('Folder deleted!');
})