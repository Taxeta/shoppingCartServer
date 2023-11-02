const options = {
  writable: true, //esto permite que se sobreescriban los datos
};

const cors = require("cors");
const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("phones.json", options);
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 4002;

server.use(middlewares);
server.use(cors());
server.use(router);
server.use(jsonServer.router("phones.json", options));
server.listen(port, () => {
  console.log(`https://localhost:${port}`);
});
