import { MOBILE_GAMES } from './src/data/mobileGames.js';
import https from 'https';
import { URL } from 'url';

const checkUrl = (urlString) => {
    return new Promise((resolve) => {
        const parsedUrl = new URL(urlString);
        const options = {
            hostname: parsedUrl.hostname,
            path: parsedUrl.pathname + parsedUrl.search,
            method: 'GET',
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
                // Explicitly no referer, though node doesn't send one by default unless specified
            }
        };

        const req = https.request(options, (res) => {
            resolve({ url: urlString, statusCode: res.statusCode });
        });

        req.on('error', (e) => {
            resolve({ url: urlString, error: e.message });
        });

        req.end();
    });
};

const checkImages = async () => {
    const gamesToCheck = MOBILE_GAMES.slice(0, 5);
    for (const game of gamesToCheck) {
        const result = await checkUrl(game.image);
        console.log(`${game.title}: ${result.statusCode || result.error}`);
    }
};

checkImages();
