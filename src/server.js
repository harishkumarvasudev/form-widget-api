import express from 'express';
import compression from 'compression';
import helmet from 'helmet';
import morgan from 'morgan';

// Config
import config from '../config/config.js';

// Middlewares
import compressPayLoad from './middlewares/payloadCompress.js';
import { setCache } from './middlewares/cache.js';
import { customHttpLogger } from './middlewares/customHttpLogger.js';
import { routeErrorHandler } from './middlewares/routeErrorHandler.js';
import { authenticateToken } from './middlewares/auth.js';
import response from './middlewares/response.js';

// Routes
import { allRoutes } from './routes/routes.js';

// Logger
import logger, { morganStream } from '../config/logger.js';

const startServer = () => {
  const app = express();

  if (config.app.name !== 'formwidget-api') {
    logger.crit(`.env file is not properly set or check the app name`);
    console.log(`.env file is not properly set or check the app name`);
    process.exit(0);
  }

  // Middleware Setup
  app.use(express.urlencoded({ extended: true }));
  app.use(helmet());
  app.use(express.json());
  app.use(customHttpLogger);
  app.use(morgan('combined', { stream: morganStream }));
  app.use(compression({ filter: compressPayLoad, threshold: 0 }));
  app.use(response);
  app.use(setCache);
  app.use(authenticateToken);

  // Routes
  allRoutes(app);

  // 404 Not Found Middleware
  app.use((req, res, next) => {
    const error = new Error('Not found');
    error.status = 404;
    next(error);
  });

  // Error Handler Middleware
  app.use(routeErrorHandler);

  let server;

  if (config.app.https === 'true') {
    // TODO: Handle HTTPS
    // if the server is hosted on a different machine and secure connection is needed
    // the SSL/TLS related code comes here
  } else {
    // HTTP only
    server = app.listen(config.app.port, () => {
      logger.info(`HTTP only server started on port ${config.app.port}`);
    });
  }

  // Error Handling
  process.on('uncaughtException', (err) => {
    logger.crit(`Uncaught exception in the application: ${err}`);
  });

  process.on('unhandledRejection', (err) => {
    logger.crit(`Unhandled rejection in the application: ${err}`);
  });

  // Graceful Shutdown
  process.on('SIGTERM', () => {
    logger.notice('Received SIGTERM signal');
    const serverRunning = server || sslServer;
    serverRunning.close(() => {
      logger.notice('Closing server');
      process.exit(0);
    });
  });
};

startServer();