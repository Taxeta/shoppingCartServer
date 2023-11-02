const cors = require("cors");
const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("phones.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 4002;

const options = {
  writable: true, //esto permite que se sobreescriban los datos
};

server.use(cors());
server.use(middlewares);
server.use(router, options);
server.listen(port, () => {
  console.log(`https://localhost:${port}`);
});
