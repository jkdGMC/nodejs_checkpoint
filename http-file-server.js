const http = require('http')
const fs = require('fs');

const port = process.argv[2]
const file = process.argv[3]

http.createServer((request,response) => {
    let fileStream = fs.createReadStream(file);
    fileStream.pipe(response);
}).listen(port)
