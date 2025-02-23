import express from 'express';
import bodyParser from "body-parser";
const app = express()
const port = process.env.PORT || 3008;

app.use(bodyParser.json());
app.use('/', express.static('public'))

// routes
import backendRoutes from "../client/routes/backendRoutes.js";
app.use("/", backendRoutes);
// import webpack from 'webpack';
// import webpackConfig from '../../webpack/webpack.dev.js';
// import webpackDevMiddleware from 'webpack-dev-middleware';
// import webpackHotMiddleware from 'webpack-hot-middleware';
// const compiler = webpack(webpackConfig);
// app.use(webpackDevMiddleware(compiler, {
//     publicPath: webpackConfig.output.publicPath,
//     serverSideRender: true
//   })
// );

// app.use(webpackHotMiddleware(compiler, {
//     log: false,
//     path: `/__webpack_hmr`,
//     heartbeat: 10 * 1000,
//   })
// );

app.listen(port, () => {
  console.log(`Example app listening on PORT ${port}`)
})