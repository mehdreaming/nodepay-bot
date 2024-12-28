class Config {
  constructor() {
    this.baseURL = 'https://app.nodepay.ai';
    this.ipCheckURL = 'https://ipinfo.io/json';
    this.pingURL = 'http://nw.nodepay.ai/api/network/ping';
    this.retryInterval = 30000; // 30 seconds
    this.sessionURL = 'http://api.nodepay.ai/api/auth/session';
  }
}

module.exports = Config;
