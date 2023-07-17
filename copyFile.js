const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  if (req.url !== "/") {
    return res.end();
  }
  //without Stream
  //   const file = fs.readFileSync("sample.txt");
  //   fs.writeFileSync("output.txt", file);

  //with Stream

  const readStream = fs.createReadStream("sample.txt");
  const writeStream = fs.createWriteStream("output.txt");
  readStream.on("data", (chunk) => {
    console.log("chunk", chunk.toString());
    writeStream.write(chunk);
  });
  res.end();
});

const PORT = process.env.PORT || 5700;

server.listen(PORT, () => console.log(`Listening on port ${PORT}`));
