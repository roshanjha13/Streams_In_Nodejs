const { Readable, Writable } = require("stream");

// //readable Stream
// const readableStream = new Readable({
//   highWaterMark: 2,
//   read() {},
// });

// readableStream.on("data", (chunk) => {
//   console.log("data Coming", chunk.toString());
// });

// console.log(readableStream.push("hello from roshan jha"));

const writableStream = new Writable({
  write(s) {
    console.log("writting :", s.toString());
  },
});

writableStream.write("hello");
