import pino, { destination } from "pino";

const transport = pino.transport({
  target: 'pino/file',
  options: {destination: "./logs/log.log", mkdir: true}
})
const options = {
  level: process.env.LOG_LEVEL || "info",
  formatters: {
    level: (label) => {
      return {level: label}
    }
  }
}
global.logger = pino(options, transport);