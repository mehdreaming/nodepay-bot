class Config {
  constructor() {
    // Base URLs
    this.baseURL = 'https://nodepay.org';
    this.apiBaseURL = 'http://api.nodepay.ai/api';
    
    // Specific Endpoints
    this.sessionURL = `${this.apiBaseURL}/auth/session`;
    this.pingURL = 'http://nw.nodepay.ai/api/network/ping';
    this.ipCheckURL = 'https://ipinfo.io/json';
    
    // Retry settings
    this.retryInterval = 30000; // 30 seconds
    this.maxRetries = 5; // Maximum retry attempts
    
    // Timeouts
    this.defaultTimeout = 5000; // 5 seconds
    this.pingInterval = 55 * 60 * 1000; // 55 minutes
  }

  getApiHeaders(token) {
    return token
      ? {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        }
      : { 'Content-Type': 'application/json' };
  }
}

module.exports = Config;
