import React, { useState, useMemo, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import GameCard from '../components/GameCard';
import { GAMES as LOCAL_GAMES } from '../data/games';
import { supabase } from '../supabaseClient';

const Home = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const categoryParam = searchParams.get('category');
    const [selectedCategory, setSelectedCategory] = useState(categoryParam || 'All');
    const [games, setGames] = useState(LOCAL_GAMES);
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');
    const [trailerUrl, setTrailerUrl] = useState(null);
    const [displayCount, setDisplayCount] = useState(20);

    useEffect(() => {
        if (categoryParam) {
            setSelectedCategory(categoryParam);
        }
    }, [categoryParam]);

    useEffect(() => {
        const fetchGames = async () => {
            try {
                const { data, error } = await supabase
                    .from('games')
                    .select('*');

                if (error) throw error;

                if (data && data.length > 0) {
                    const supabaseIds = new Set(data.map(g => g.id));
                    const localOnlyGames = LOCAL_GAMES.filter(g => !supabaseIds.has(g.id));
                    setGames([...data, ...localOnlyGames]);
                } else {
                    console.log('No games found in Supabase, using local data.');
                    setGames(LOCAL_GAMES);
                }
            } catch (error) {
                console.error('Error fetching games:', error.message);
                setGames(LOCAL_GAMES);
            } finally {
                setLoading(false);
            }
        };

        fetchGames();
    }, []);

    const categories = useMemo(() => {
        const cats = new Set(['All']);
        games.forEach(game => cats.add(game.category));
        return Array.from(cats);
    }, [games]);

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
        setDisplayCount(20);
        if (category === 'All') {
            setSearchParams({});
        } else {
            setSearchParams({ category });
        }
    };

    const handleLoadMore = () => {
        setDisplayCount(prev => prev + 20);
    };

    const filteredGames = useMemo(() => {
        let filtered = games;

        if (selectedCategory !== 'All') {
            filtered = filtered.filter(g => g.category === selectedCategory);
        }

        if (searchQuery) {
            const query = searchQuery.toLowerCase();
            filtered = filtered.filter(g => g.title.toLowerCase().includes(query));
        }

        return filtered;
    }, [selectedCategory, games, searchQuery]);

    const displayedGames = filteredGames.slice(0, displayCount);
    const hasMore = displayCount < filteredGames.length;

    // YouTube URL parser
    const getYouTubeEmbedUrl = (url) => {
        if (!url) return null;
        let videoId = null;

        if (url.includes('watch?v=')) {
            videoId = url.split('watch?v=')[1].split('&')[0];
        } else if (url.includes('youtu.be/')) {
            videoId = url.split('youtu.be/')[1].split('?')[0];
        } else if (url.includes('embed/')) {
            videoId = url.split('embed/')[1].split('?')[0];
        }

        return videoId ? `https://www.youtube.com/embed/${videoId}?autoplay=1` : null;
    };

    const embedUrl = trailerUrl ? getYouTubeEmbedUrl(trailerUrl) : null;

    return (
        <>
            <Helmet>
                <title>GameZone - Best Gaming Reviews & Deals</title>
                <meta name="description" content="Discover top-rated games, exclusive deals, and expert reviews at GameZone. Your ultimate destination for gaming offers." />
            </Helmet>
            <Hero />

            {/* Trailer Modal */}
            {embedUrl && (
                <div style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'rgba(0,0,0,0.9)',
                    zIndex: 2000,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '20px'
                }} onClick={() => setTrailerUrl(null)}>
                    <div style={{
                        position: 'relative',
                        width: '100%',
                        maxWidth: '900px',
                        aspectRatio: '16/9',
                        background: '#000',
                        borderRadius: '12px',
                        overflow: 'hidden'
                    }} onClick={e => e.stopPropagation()}>
                        <button
                            onClick={() => setTrailerUrl(null)}
                            style={{
                                position: 'absolute',
                                top: '10px',
                                right: '10px',
                                background: 'rgba(0,0,0,0.5)',
                                color: '#fff',
                                border: 'none',
                                borderRadius: '50%',
                                width: '30px',
                                height: '30px',
                                cursor: 'pointer',
                                zIndex: 10,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '1.2rem'
                            }}
                        >
                            ×
                        </button>
                        <iframe
                            src={embedUrl}
                            title="Game Trailer"
                            style={{ width: '100%', height: '100%', border: 0 }}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    </div>
                </div>
            )}

            {/* Featured Games */}
            <section className="container" style={{ padding: '4rem 20px' }} id="featured-games">
                <div style={{ marginBottom: '3rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1rem', marginBottom: '1rem' }}>
                        <h2 style={{ fontSize: '2.5rem', fontWeight: '700', margin: 0 }}>Featured Games</h2>

                        {/* Search Input */}
                        <div style={{ position: 'relative', width: '100%', maxWidth: '300px' }}>
                            <input
                                type="text"
                                placeholder="Search games..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                style={{
                                    width: '100%',
                                    padding: '10px 15px 10px 40px',
                                    borderRadius: '20px',
                                    background: 'rgba(255,255,255,0.05)',
                                    border: '1px solid rgba(255,255,255,0.1)',
                                    color: '#fff',
                                    outline: 'none',
                                    fontSize: '0.9rem'
                                }}
                            />
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-secondary)' }}>
                                <circle cx="11" cy="11" r="8"></circle>
                                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                            </svg>
                        </div>
                    </div>

                    {/* Category Filter */}
                    <div style={{ display: 'flex', gap: '1rem', overflowX: 'auto', paddingBottom: '1rem' }}>
                        {categories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => handleCategoryChange(cat)}
                                style={{
                                    padding: '8px 16px',
                                    borderRadius: '20px',
                                    background: selectedCategory === cat ? 'var(--color-primary)' : 'rgba(255,255,255,0.05)',
                                    color: selectedCategory === cat ? '#000' : 'var(--text-secondary)',
                                    border: '1px solid rgba(255,255,255,0.1)',
                                    whiteSpace: 'nowrap',
                                    transition: 'all 0.3s ease'
                                }}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    <p style={{ color: 'var(--text-secondary)', marginTop: '1rem' }}>
                        Showing {displayedGames.length} of {filteredGames.length} games
                    </p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
                    gap: '1.5rem'
                }}>
                    {displayedGames.map((game, index) => (
                        <GameCard
                            key={game.id}
                            game={game}
                            index={index}
                            onWatchTrailer={() => setTrailerUrl(game.trailerUrl || game.trailer_url)}
                        />
                    ))}
                </div>

                {hasMore && (
                    <div style={{ textAlign: 'center', marginTop: '3rem' }}>
                        <button
                            onClick={handleLoadMore}
                            className="btn btn-primary"
                            style={{ padding: '15px 40px', fontSize: '1.1rem' }}
                        >
                            Load More Games ({filteredGames.length - displayCount} remaining)
                        </button>
                    </div>
                )}
            </section>

            {/* Latest News Section */}
            <section className="container" style={{ paddingTop: '80px', paddingBottom: '80px' }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <h2 style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '1rem' }}>Latest Gaming News</h2>
                        <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
                            Stay updated with our latest articles, game rankings, and industry insights
                        </p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
                        {[
                            {
                                title: "Top 10 RPGs to Play in 2024",
                                excerpt: "From Elden Ring's DLC to the latest Final Fantasy, we rank the best role-playing games...",
                                image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1245620/header.jpg",
                                category: "Features"
                            },
                            {
                                title: "The Future of Cloud Gaming",
                                excerpt: "Is hardware becoming obsolete? We dive deep into cloud gaming services...",
                                image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1091500/header.jpg",
                                category: "Tech"
                            },
                            {
                                title: "Hidden Indie Gems",
                                excerpt: "These smaller titles pack a punch. Discover the treasures of the indie scene...",
                                image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1426210/header.jpg",
                                category: "Reviews"
                            }
                        ].map((article, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="card"
                                style={{ overflow: 'hidden', cursor: 'pointer' }}
                                whileHover={{ y: -5 }}
                            >
                                <div style={{ height: '180px', overflow: 'hidden', position: 'relative' }}>
                                    <img
                                        src={article.image}
                                        alt={article.title}
                                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                    />
                                    <div style={{ position: 'absolute', top: '1rem', left: '1rem', background: 'var(--color-primary)', color: '#000', padding: '0.25rem 0.75rem', borderRadius: '20px', fontSize: '0.75rem', fontWeight: '600' }}>
                                        {article.category}
                                    </div>
                                </div>
                                <div style={{ padding: '1.5rem' }}>
                                    <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', lineHeight: '1.3' }}>{article.title}</h3>
                                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{article.excerpt}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div style={{ textAlign: 'center' }}>
                        <Link to="/news" className="btn btn-outline" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                            View All Articles
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </Link>
                    </div>
                </motion.div>
            </section>

            {/* CTA Section */}
            <section className="container" style={{ paddingTop: '80px', paddingBottom: '80px' }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    style={{
                        background: 'linear-gradient(135deg, rgba(138, 180, 248, 0.1) 0%, rgba(111, 160, 232, 0.05) 100%)',
                        padding: '4rem 3rem',
                        borderRadius: 'var(--radius-lg)',
                        textAlign: 'center',
                        border: '1px solid rgba(138, 180, 248, 0.2)'
                    }}
                >
                    <h2 style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '1rem' }}>Ready to Start Gaming?</h2>
                    <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem' }}>
                        Join our community today and get access to exclusive deals, expert guides, and the best gaming content on the web.
                    </p>
                    <Link to="/categories" className="btn btn-primary" style={{ fontSize: '1.1rem', padding: '15px 40px' }}>
                        Explore All Games
                    </Link>
                </motion.div>
            </section>
        </>
    );
};

export default Home;
