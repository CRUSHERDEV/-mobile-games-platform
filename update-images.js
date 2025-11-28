// Script to update game images with working URLs
// Using a combination of sources for reliable images

const getWorkingImageUrl = (gameTitle, gameId) => {
    // Map of games to their working image URLs
    const imageMap = {
        // Puzzle games
        'portal-2': 'https://cdn.cloudflare.steamstatic.com/steam/apps/620/header.jpg',
        'witness': 'https://cdn.cloudflare.steamstatic.com/steam/apps/210970/header.jpg',
        'inside': 'https://cdn.cloudflare.steamstatic.com/steam/apps/304430/header.jpg',
        'limbo': 'https://cdn.cloudflare.steamstatic.com/steam/apps/48000/header.jpg',
        'tetris-effect': 'https://cdn.cloudflare.steamstatic.com/steam/apps/1003590/header.jpg',
        'baba-is-you': 'https://cdn.cloudflare.steamstatic.com/steam/apps/736260/header.jpg',
        'human-fall-flat': 'https://cdn.cloudflare.steamstatic.com/steam/apps/477160/header.jpg',
        'monument-valley': 'https://cdn.cloudflare.steamstatic.com/steam/apps/2643600/header.jpg',
        'braid': 'https://cdn.cloudflare.steamstatic.com/steam/apps/26800/header.jpg',
        'talos-principle': 'https://cdn.cloudflare.steamstatic.com/steam/apps/257510/header.jpg',
    };

    return imageMap[gameId] || null;
};

// Helper to convert Steam library URLs to header URLs (which work better)
const convertSteamUrl = (url) => {
    if (url && url.includes('library_600x900')) {
        const appId = url.match(/\/apps\/(\d+)\//)?.[1];
        if (appId) {
            return `https://cdn.cloudflare.steamstatic.com/steam/apps/${appId}/header.jpg`;
        }
    }
    return url;
};

console.log('Image URL helper loaded');
console.log('Use convertSteamUrl() to fix Steam URLs');
console.log('Use getWorkingImageUrl() for specific game IDs');

module.exports = { getWorkingImageUrl, convertSteamUrl };
