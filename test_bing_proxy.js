import https from 'https';

const gameTitle = "Subway Surfers";
const url = `https://tse2.mm.bing.net/th?q=${encodeURIComponent(gameTitle + " mobile game icon")}&w=300&h=300&c=7`;

https.get(url, (res) => {
    console.log(`Status: ${res.statusCode}`);
    console.log(`Content-Type: ${res.headers['content-type']}`);
}).on('error', (e) => {
    console.error(e);
});
