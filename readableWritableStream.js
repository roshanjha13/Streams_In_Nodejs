const { Readable, Writable } = require("stream");

//readable Stream
const readableStream = new Readable({
  highWaterMark: 50,
  read() {},
});

const writableStream = new Writable({
  write(s) {
    console.log("writting :", s.toString());
  },
});

readableStream.on("data", (chunk) => {
  console.log("data Coming", chunk.toString());
  writableStream.write(chunk);
});

console.log(readableStream.push("hello from roshan jha"));
