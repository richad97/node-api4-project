const server = require("./server");
require("dotenv").config();

const PORT = process.env.PORT || 9000;

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}.`);
});
