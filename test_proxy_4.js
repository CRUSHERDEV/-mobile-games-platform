import https from 'https';

const url = "https://images.weserv.nl/?url=upload.wikimedia.org/wikipedia/en/0/02/Subway_Surfers_Logo.png";

https.get(url, (res) => {
    console.log(`Status: ${res.statusCode}`);
}).on('error', (e) => {
    console.error(e);
});
