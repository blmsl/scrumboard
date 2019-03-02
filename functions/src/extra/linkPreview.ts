import * as puppeteer from 'puppeteer';

export function linkPreview(url: string): Promise<{
    title: string,
    desc: string,
    img: string
}> {
    return new Promise(async (resolve, reject) => {
        try {
            const browser = await puppeteer.launch({
                headless: true,
                args: ['--no-sandbox', '--disable-setuid-sandbox']
            });
            const page = await browser.newPage();
            await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3419.0 Safari/537.36');
            await page.setRequestInterception(true);
            page.on('request', (request) => {
                if (['image', 'stylesheet', 'font', 'script'].indexOf(request.resourceType()) !== -1) {
                    request.abort();
                } else {
                    request.continue();
                }
            });
            await page.goto(url, { waitUntil: 'networkidle0' });
            const title = await page.title();
            console.log('Scraping website: ', title);
            const desc = await page.evaluate(() => {
                try {
                    try { return (<any>document.querySelectorAll("head > meta[property='og:description']")[0]).content; }
                    catch { return (<any>document.querySelectorAll("head > meta[name='description']")[0]).content; }
                } catch {
                    return null;
                }
            });
            const img = await page.evaluate(() => {
                try {
                    try { return (<any>document.querySelectorAll("head > meta[property='og:image']")[0]).content }
                    catch { return (<any>document.querySelectorAll("img")[0]).src }
                } catch {
                    return null
                }
            });
            console.log({ desc, title, img });

            await browser.close();
            resolve({ title, desc, img })
        } catch (err) {
            console.error(err);
            reject(err);
        }
    });
}

// linkPreview('https://stackoverflow.com/questions/47328830/get-title-from-newly-opened-page-puppeteer');
