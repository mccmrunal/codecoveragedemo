# WebdriverIO Code Coverage Demo

This repository demonstrates how to properly set up code coverage with WebdriverIO's browser runner.

## Prerequisites
- Node.js installed

## Setup
1. Install dependencies:
   ```bash
   npm install
   ```

## Running Tests & Coverage
Run the tests to generate the coverage report:
```bash
npm test
```

A `coverage/` directory will be created. You can view the report by opening `coverage/lcov-report/index.html` in your browser.

## Key Concepts
- **Component Testing Style**: The test imports the function directly (`import { add } from '../src/calculator.js'`) instead of using `browser.url()`. This ensures the code runs within the Vite-instrumented environment.
- **Configuration**: Uses `@wdio/browser-runner` with `coverage: { enabled: true }` in `wdio.conf.js`.

## Troubleshooting
If you see 0% coverage, ensure you are **not** using `browser.url('file://...')` or navigating to external sites in your tests, as this breaks instrumentation.
