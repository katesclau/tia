import express from "express";
import bodyParser from 'body-parser';
import routes from "./routes";
import logRequests from "./middlewares/logRequests";
import errorHanlder from "./middlewares/errorHanlder";

const server = express();

server.use(bodyParser.urlencoded({
  extended: true
}));
server.use(bodyParser.json());
server.use(logRequests);

server.use('/api', routes);
server.use(errorHanlder);

export default server;
