const puppeteer = require('puppeteer');
const handler = require('serve-handler');
const http = require('http');

const server = http.createServer((request, response) => {
    // You pass two more arguments for config and middleware
    // More details here: https://github.com/zeit/serve-handler#options
    return handler(request, response, {
        public: 'build'
    });
});

server.listen(7000, () => {
    console.log('Running at http://localhost:7000');
    (async () => {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();

        console.log('Running puppeteer...');

        await page.setViewport({ width: 1280, height: 800 });
        await page.goto('http://localhost:7000');
        await page.screenshot({ path: './test.png', fullPage: true });
        await browser.close();
        await server.close();
        console.log('Done.');
    })();
});
