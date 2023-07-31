// Set the NODE_ENV to 'development' by default if it's not already set
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

// Configuration object containing various settings for the application
const config = {
  // App configuration
  app: {
    name: process.env.APP_NAME, // Application name (can be customized via environment variable)
    port: process.env.PORT || 5000, // Node.js server port (default: 5000)
    env: process.env.NODE_ENV, // Node environment (development, production, etc.)
    https: process.env.HTTPS // Indicator whether the server uses HTTPS (can be customized via environment variable)
  },

  // Database configuration
  database: {
    type: process.env.FIREBASE_TYPE,
    project_id: process.env.FIREBASE_PROJECT_ID,
    private_key_id: process.env.FIREBASE_PRIVATE_KEY_ID,
    private_key: process.env.FIREBASE_PRIVATE_KEY,
    client_email: process.env.FIREBASE_CLIENT_EMAIL,
    client_id: process.env.FIREBASE_CLIENT_ID,
    auth_uri: process.env.FIREBASE_AUTH_URI,
    token_uri: process.env.FIREBASE_TOKEN_URI,
    auth_provider_x509_cert_url: process.env.FIREBASE_AUTH_PROVIDER_X509_CERT_URL,
    client_x509_cert_url: process.env.FIREBASE_CLIENT_X509_CERT_URL,
    universe_domain: process.env.FIREBASE_UNIVERSE_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL
  },

  // Log configuration
  log: {
    logLevel: process.env.LOG_LEVEL, // Log level (can be customized via environment variable)
    logSize: process.env.LOG_SIZE, // Log size (can be customized via environment variable)
    logInterval: process.env.LOG_INTERVAL // Log interval (can be customized via environment variable)
  },

  // JWT (JSON Web Token) configuration
  jwt: {
    tokenSecret: process.env.JWT_TOKEN_SECRET, // Token secret (can be customized via environment variable)
    refreshTokenSecret: process.env.JWT_REFRESH_TOKEN_SECRET, // Refresh token secret (can be customized via environment variable)
    invalidTokenMessage: 'Invalid Token', // Message for invalid tokens
    expiryTime: process.env.JWT_EXPIRY_TIME || '900s', // Token expiry time (default: 900 seconds)
  },

  // Cache configuration
  cache: {
    cachePeriod: 1, // Cache period in seconds (default: 1 second)
  },

  // Standard responses used throughout the application
  standardResponse: {
    success: {
      status: 'ok',
      message: 'success',
    },
    invalid: {
      status: 'failed',
      message: 'Invalid request',
    },
    failure: {
      status: 'failed',
      message: 'Internal server error',
    },
    notFound: {
      status: 'failed',
      message: 'Data not found',
    },
    notSupportedMethod: {
      status: 'failed',
      message: 'HTTP/S method not supported',
    },
    unauthorized: {
      status: 'failed',
      message: 'Not authorized to perform this action',
    },
  }
};

export default config;