import puppetter from 'puppeteer';

async function login(browser, user, password) {
    const page = await browser.newPage();

    await page.goto('https://www.flashscore.com.br', {
        waitUntil: 'networkidle0',
    });

    await page.click('#signIn', {
        waitUntil: 'networkidle0',
    });

    await page.click('#onetrust-accept-btn-handler', {
        waitUntil: 'networkidle0',
    })

    await page.$eval('#email', (el, user) => (el.value = user), user)

    await page.$eval('#passwd', (el, password) => (el.value = password), password)

    await page.waitForTimeout(500)

    await page.click('#login')

    await page.waitForTimeout(3000)

    await page.close();
}

class scrapingController {

    async login(req, res) {
        const { user, password } = req.query;

        const browser = await puppetter.launch({
            headless: false,
            devtools: false,
            args: [
                "--no-sandbox",
                "--disable-setuid-sandbox"
            ],
        });

        login(browser, user, password)
    }

}

export default new scrapingController()