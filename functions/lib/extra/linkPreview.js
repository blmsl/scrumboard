"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const puppeteer = require("puppeteer");
function linkPreview(url) {
    return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
        try {
            const browser = yield puppeteer.launch({
                headless: true,
                args: ['--no-sandbox', '--disable-setuid-sandbox']
            });
            const page = yield browser.newPage();
            yield page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3419.0 Safari/537.36');
            yield page.setRequestInterception(true);
            page.on('request', (request) => {
                if (['image', 'stylesheet', 'font', 'script'].indexOf(request.resourceType()) !== -1) {
                    request.abort();
                }
                else {
                    request.continue();
                }
            });
            yield page.goto(url, { waitUntil: 'networkidle0' });
            const title = yield page.title();
            console.log('Scraping website: ', title);
            const desc = yield page.evaluate(() => {
                try {
                    try {
                        return document.querySelectorAll("head > meta[property='og:description']")[0].content;
                    }
                    catch (_a) {
                        return document.querySelectorAll("head > meta[name='description']")[0].content;
                    }
                }
                catch (_b) {
                    return null;
                }
            });
            const img = yield page.evaluate(() => {
                try {
                    try {
                        return document.querySelectorAll("head > meta[property='og:image']")[0].content;
                    }
                    catch (_a) {
                        return document.querySelectorAll("img")[0].src;
                    }
                }
                catch (_b) {
                    return null;
                }
            });
            console.log({ desc, title, img });
            yield browser.close();
            resolve({ title, desc, img });
        }
        catch (err) {
            console.error(err);
            reject(err);
        }
    }));
}
exports.linkPreview = linkPreview;
// linkPreview('https://stackoverflow.com/questions/47328830/get-title-from-newly-opened-page-puppeteer');
//# sourceMappingURL=linkPreview.js.map