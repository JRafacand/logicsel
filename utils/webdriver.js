const { Builder, By, Key, until } = require('selenium-webdriver');

async function setupDriver() {
    return await new Builder().forBrowser('chrome').build();
}

module.exports = {
    setupDriver
};