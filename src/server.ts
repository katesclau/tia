import express from "express";
import routes from "./routes";
import logRequests from "./middlewares/logRequests";

const server = express();

server.use(logRequests);

server.use('/api', routes);

export default server;
