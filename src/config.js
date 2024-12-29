class Config {
  constructor() {
    // Updated URLs
    this.baseURL = 'https://api.nodepay.ai';
    this.ipCheckURL = 'https://ipinfo.io/json';
    this.pingURL = 'https://nw.nodepay.org/api/network/ping';
    this.sessionURL = 'https://api.nodepay.ai/api/auth/session';

    // Default retry interval
    this.retryInterval = 30000; // 30 seconds
  }
}

module.exports = Config;
