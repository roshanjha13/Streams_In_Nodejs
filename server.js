const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  if (req.url !== "/") {
    return res.end();
  }

  // const file = fs.readFileSync("sample.txt");

  // return res.end(file);

  //downloading big file using good way

  const readableStream = fs.createReadStream("sample.txt");
  // if you have readable stram you pipe in writable stream
  readableStream.pipe(res);

  //  const readableStream = fs.createReadStream("video.mp4");
  //  // if you have readable stram you pipe in writable stream
  //  res.writeHead(200,{'content-type':'video/mp4'})
  // readableStream.pipe(res);
});

const PORT = process.env.PORT;

server.listen(PORT, () => console.log(`Listening on port ${PORT}`));
