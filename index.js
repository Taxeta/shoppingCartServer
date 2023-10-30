const cors = require("cors");
const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("phones.json");
const port = process.env.PORT || 4002;

server.use(cors());
server.use(router);
server.listen(port);
