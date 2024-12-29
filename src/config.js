// config.js

const CONFIG = {
  // API Endpoints
  API: {
    SESSION: "https://api.nodepay.org/api/auth/session",
    PING: "https://nw.nodepay.org/api/network/ping",
  },

  // Connection States
  CONNECTION_STATES: {
    CONNECTED: 1,
    DISCONNECTED: 2, // Server error
    NONE_CONNECTION: 3, // Case logout
  },

  // Timeout settings
  TIMEOUTS: {
    DEFAULT_PING_TIMEOUT: 55 * 60 * 1000, // 55 minutes
    RETRY_PING_TIMEOUT: 5 * 60 * 1000, // 5 minutes
  },

  // Random time settings
  RANDOM_TIME: {
    MIN_MINUTES: 1,
    MAX_MINUTES: 5,
  },

  // Debugging settings
  DEBUG: false, // Set to true for debugging logs

  // Other configurations
  MAX_RETRIES: 6,
};

export default CONFIG;
