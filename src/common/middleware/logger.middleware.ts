import { Log4js, LoggingEvent } from 'log4js/types/log4js';
const log4js: Log4js = require('log4js');

log4js.addLayout('json', config => (logEvent: LoggingEvent) => {
  if (logEvent.data.length > 0 && typeof logEvent.data[0] === 'object') {
    logEvent.context.stack = logEvent.data[0].hasOwnProperty('stack')
      ? logEvent.data[0].stack
      : null;
  }
  return JSON.stringify(logEvent) + config.separator;
});

log4js.configure({
  appenders: {
    http: { type: 'stdout', layout: { type: 'json', separator: ',' } },
    error: {
      type: 'stdout',
      layout: {
        type: 'json',
        separator: ',',
      },
    },
  },
  categories: {
    default: { appenders: ['http'], level: 'all' },
    error: { appenders: ['error'], level: 'error' },
  },
});

const httpLogger = log4js.getLogger();
const errorLogger = log4js.getLogger('error');

export { log4js, httpLogger, errorLogger };
