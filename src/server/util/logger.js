import {createLogger, format, transports} from 'winston';
const { combine, timestamp, label, printf, prettyPrint, simple, splat } = format;

global.logger = createLogger({
  level: 'info',
  format: combine(
    timestamp(),
    prettyPrint()
  ),
  transports: [
    new transports.File({ filename: 'logger/logs.log' }),
  ],
});