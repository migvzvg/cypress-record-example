Description of the error.

The test passes without problems when using the headless version "cypress:run", however when the recording option is enabled ("cypress:record") the test fails because the focus remains on the focused component, probably due to an intentional focus trap.


# cypress-test-tiny

> Tiny Cypress E2E test case

Build status | Name | Description
:--- | :--- | :---
[![CircleCI](https://dl.circleci.com/status-badge/img/gh/cypress-io/cypress-test-tiny/tree/master.svg?style=svg)](https://dl.circleci.com/status-badge/redirect/gh/cypress-io/cypress-test-tiny/tree/master) | CircleCI | Linux & Mac & Win 64

## Important

Note that this project **DOES NOT** include Cypress dependency in the [package.json](package.json). The reason for such omission is that we use this project to test every Cypress build and do not want to spend time installing `cypress@x.x.x` just to immediately install and test `cypress@y.y.y`. Which means when submitting pull requests with a bug report, please save the problematic version of Cypress in `package.json`. Simply run `npm install --save-dev cypress` or `npm i -D cypress@x.x.x` and commit the change before submitting a pull request.
