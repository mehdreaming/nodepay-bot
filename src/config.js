class Config {
  constructor() {
    this.baseURL = 'https://nodepay.api';  // Updated base URL
    this.ipCheckURL = 'https://ipinfo.io/json';  // This URL seems fine, no changes needed
    this.pingURL = 'https://nodepay.api/ping';  // Updated ping URL
    this.retryInterval = 30000; // 30 seconds
    this.sessionURL = 'https://nodepay.api/api/auth/session';  // Updated session URL
  }
}

module.exports = Config;
