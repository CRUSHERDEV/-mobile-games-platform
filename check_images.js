import { MOBILE_GAMES } from './src/data/mobileGames.js';
import https from 'https';

const checkUrl = (url) => {
    return new Promise((resolve) => {
        https.get(url, (res) => {
            resolve({ url, statusCode: res.statusCode });
        }).on('error', (e) => {
            resolve({ url, error: e.message });
        });
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
