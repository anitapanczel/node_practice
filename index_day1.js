const fileSystem = require("fs");
const { Http2ServerRequest } = require("http2");
const http = require('http');
const url = require('url');

const add = (x, y) => {
    if (x + y > 10) return "sok";
    if (x + y < 0) return 0;
    return Math.floor(x + y);
}



http
.createServer(function (req, res) {
    if (req.url === '/favicon.ico') return res.end();
    //console.log(req.url);
    const queryObject = url.parse(req.url, true).query;
    console.log(queryObject);
    const result = add(Number(queryObject.num1), Number(queryObject.num2));
    fileSystem.writeFileSync("./math.txt", result.toString());
    console.log(result);
    res.write(result.toString());
    res.end();
})
.listen(8080);
