// This script will help identify which images are broken
// We'll replace Bing URLs with reliable placeholder images

const brokenImagePatterns = [
    'tse2.mm.bing.net',
    'tse1.mm.bing.net',
    'tse3.mm.bing.net',
    'tse4.mm.bing.net'
];

const getPlaceholderImage = (title, category) => {
    // Use a more reliable placeholder service
    const encodedTitle = encodeURIComponent(title);
    return `https://placehold.co/400x400/1a1a1a/8ab4f8?text=${encodedTitle}`;
};

console.log('Image Fix Helper');
console.log('================');
console.log('Replace Bing URLs with placeholders:');
console.log(`Pattern: image: "https://tse2.mm.bing.net/..."`);
console.log(`Replace with: image: getPlaceholderImage("Game Title", "Category")`);
