import { MOBILE_GAMES } from './src/data/mobileGames.js';

const placeholderUrl = 'https://www.youtube.com/watch?v=Ql3vJJ0Qhxs';
const uniqueUrls = new Set();
let placeholderCount = 0;

MOBILE_GAMES.forEach(game => {
    if (game.trailerUrl) {
        uniqueUrls.add(game.trailerUrl);
        if (game.trailerUrl === placeholderUrl) {
            placeholderCount++;
        }
    }
});

console.log(`Total mobile games: ${MOBILE_GAMES.length}`);
console.log(`Games with placeholder URL: ${placeholderCount}`);
console.log(`Unique trailer URLs: ${uniqueUrls.size}`);
console.log(`Games with valid trailers: ${MOBILE_GAMES.length - placeholderCount}`);
