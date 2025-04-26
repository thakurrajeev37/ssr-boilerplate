import express from 'express';
import bodyParser from "body-parser";
import path from "path";

import { renderer } from "./helpers/renderer.js";

const app = express()
const port = process.env.PORT || 3008;

app.use(bodyParser.json());
import "./util/logger.js";

import requestContextBuilder from './middleware/requestContextBuilder.js';
app.use(requestContextBuilder);

app.use('/', express.static(path.join(__dirname, '../../public')))


app.all("*", (req, res) => {
  global.logger.info({ message: "Global route call.", file: "server.js", url: req.url, userIP: req.ip });
  renderer(req, res);
});
app.use((error, req, res, next) => {
  error.statusCode = error.statusCode || 500;
});
app.listen(port, () => {
  console.log(`App listening on PORT ${port}`)
})