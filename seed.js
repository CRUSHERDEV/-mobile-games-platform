import { createClient } from '@supabase/supabase-js';
import { GAMES } from './src/data/games.js';

const supabaseUrl = 'https://qkebjviacnbsucpbngft.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFrZWJqdmlhY25ic3VjcGJuZ2Z0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjM2ODgzMDAsImV4cCI6MjA3OTI2NDMwMH0.yYbiYCKSwqvoahG2Anv2baVoTq1lNu32SShO0_3PEOM';

const supabase = createClient(supabaseUrl, supabaseKey);

const seedData = async () => {
    console.log('Seeding data...');

    // GAMES array already includes mobile games now
    const uniqueGames = Array.from(new Map(GAMES.map(item => [item.id, item])).values());

    const gamesToInsert = uniqueGames.map(game => ({
        id: game.id,
        title: game.title,
        category: game.category,
        rating: game.rating,
        image: game.image,
        description: `Experience the thrill of ${game.title}. This ${game.category} game offers immersive gameplay, stunning visuals, and hours of entertainment. Join millions of players and master the challenges that await you in ${game.title}.`,
        affiliate_link: 'https://example.com/play/' + game.id,
        trailer_url: game.trailerUrl || null
    }));

    // Insert in batches of 50 to avoid payload limits
    const batchSize = 50;
    for (let i = 0; i < gamesToInsert.length; i += batchSize) {
        const batch = gamesToInsert.slice(i, i + batchSize);
        const { data, error } = await supabase
            .from('games')
            .upsert(batch, { onConflict: 'id' });

        if (error) {
            console.error(`Error inserting batch ${i}:`, error);
        } else {
            console.log(`Inserted batch ${i} - ${i + batch.length}`);
        }
    }

    console.log(`Seeding complete. Processed ${uniqueGames.length} games.`);
};

seedData();
