export const config = {
    runner: ['browser', {
        coverage: {
            enabled: true,
            reportsDirectory: './coverage',
            reporter: ['text', 'json', 'lcov', 'clover']
        },
        headless: true
    }],
    specs: [
        './test/**/*.test.js'
    ],
    capabilities: [{
        browserName: 'chrome',
        'goog:chromeOptions': {
            args: ['--headless', '--disable-gpu', '--no-sandbox']
        }
    }],
    logLevel: 'info',
    framework: 'mocha',
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    }
}
