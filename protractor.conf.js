
exports.config = {
  framework: 'mocha',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['test/e2e/*-spec.js'],
  onPrepare: function() {
      browser.ignoreSynchronization = true;
  }
}
