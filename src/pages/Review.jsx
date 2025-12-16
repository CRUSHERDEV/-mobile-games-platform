import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Star, Check, X, ArrowLeft, Download } from 'lucide-react';
import { motion } from 'framer-motion';
import { supabase } from '../supabaseClient';
import { GAMES as LOCAL_GAMES } from '../data/games';

const Review = () => {
    const { id } = useParams();
    const [game, setGame] = useState(null);
    const [loading, setLoading] = useState(true);
    const [showTrailerModal, setShowTrailerModal] = useState(false);

    useEffect(() => {
        const fetchGame = async () => {
            try {
                const { data, error } = await supabase
                    .from('games')
                    .select('*')
                    .eq('id', id)
                    .single();

                if (error) throw error;

                if (data) {
                    setGame(data);
                } else {
                    // Fallback to local if not found in DB (or before DB is ready)
                    const localGame = LOCAL_GAMES.find(g => g.id === id);
                    setGame(localGame);
                }
            } catch (error) {
                console.error('Error fetching game:', error);
                // Fallback
                const localGame = LOCAL_GAMES.find(g => g.id === id);
                setGame(localGame);
            } finally {
                setLoading(false);
            }
        };

        fetchGame();
    }, [id]);

    if (loading) {
        return (
            <div className="container pt-32 text-center flex-center" style={{ minHeight: '60vh' }}>
                <div style={{ fontSize: '1.5rem', color: 'var(--color-primary)' }}>Loading...</div>
            </div>
        );
    }

    if (!game) return <div className="container pt-32 text-center">Game not found</div>;

    const getYouTubeEmbedUrl = (url) => {
        if (!url) return null;

        let videoId = null;

        // Handle standard watch URLs: https://www.youtube.com/watch?v=VIDEO_ID
        if (url.includes('watch?v=')) {
            videoId = url.split('watch?v=')[1].split('&')[0];
        }
        // Handle short URLs: https://youtu.be/VIDEO_ID
        else if (url.includes('youtu.be/')) {
            videoId = url.split('youtu.be/')[1].split('?')[0];
        }
        // Handle embed URLs: https://www.youtube.com/embed/VIDEO_ID
        else if (url.includes('embed/')) {
            videoId = url.split('embed/')[1].split('?')[0];
        }

        if (videoId) {
            return `https://www.youtube.com/embed/${videoId}?autoplay=1`;
        }

        return null;
    };

    const embedUrl = getYouTubeEmbedUrl(game.trailerUrl || game.trailer_url);

    return (
        <div className="container" style={{ paddingTop: '120px', paddingBottom: '80px' }}>
            <Helmet>
                <title>{game.title} Review - GameFlex</title>
                <meta name="description" content={`Read our expert review of ${game.title}. ${game.description ? game.description.substring(0, 150) : ''}...`} />
            </Helmet>
            <Link to="/" className="btn btn-outline" style={{ marginBottom: '2rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                <ArrowLeft size={16} /> Back to Games
            </Link>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 350px', gap: '3rem' }}>
                {/* Main Content */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="card" style={{ padding: '2rem', marginBottom: '2rem' }}>
                        <img
                            src={game.image}
                            alt={game.title}
                            style={{
                                width: '100%',
                                height: '400px',
                                objectFit: 'cover',
                                borderRadius: 'var(--radius-md)',
                                marginBottom: '2rem'
                            }}
                        />

                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                            <span style={{
                                background: 'rgba(138, 180, 248, 0.1)',
                                color: 'var(--color-primary)',
                                padding: '6px 12px',
                                borderRadius: '100px',
                                fontSize: '0.85rem',
                                fontWeight: '600'
                            }}>
                                {game.category}
                            </span>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#ffd700' }}>
                                <Star fill="#ffd700" size={16} />
                                <span style={{ fontWeight: '600' }}>{game.rating}/5.0</span>
                            </div>
                        </div>

                        <h1 style={{ fontSize: '3rem', marginBottom: '1.5rem', lineHeight: '1.1' }}>{game.title} Review</h1>

                        <div style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '2rem' }}>
                            <p style={{ marginBottom: '1.5rem' }}>
                                {game.description || `Experience the next level of gaming with ${game.title}. With stunning graphics, immersive gameplay, and a compelling storyline, it stands out as a masterpiece in the ${game.category} genre.`}
                            </p>
                            {!game.description && (
                                <p>
                                    Whether you are a veteran of the series or a newcomer, this title offers hours of entertainment and challenges that will keep you coming back for more.
                                </p>
                            )}
                        </div>

                        {/* Verdict */}
                        <div style={{
                            background: 'var(--bg-primary)',
                            padding: '2rem',
                            borderRadius: 'var(--radius-md)',
                            borderLeft: '4px solid var(--color-primary)'
                        }}>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>The Verdict</h3>
                            <p style={{ color: 'var(--text-secondary)', fontStyle: 'italic' }}>
                                "A must-play title that pushes the boundaries of what's possible in modern gaming. Highly recommended for fans of the genre."
                            </p>
                        </div>

                        {/* Trailer Section */}
                        {embedUrl && (
                            <div style={{ marginTop: '3rem' }}>
                                <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Official Trailer</h3>
                                <div style={{
                                    position: 'relative',
                                    paddingBottom: '56.25%', /* 16:9 Aspect Ratio */
                                    height: 0,
                                    overflow: 'hidden',
                                    borderRadius: 'var(--radius-md)',
                                    background: '#000'
                                }}>
                                    <iframe
                                        src={embedUrl.replace('?autoplay=1', '')}
                                        title={`${game.title} Trailer`}
                                        style={{
                                            position: 'absolute',
                                            top: 0,
                                            left: 0,
                                            width: '100%',
                                            height: '100%',
                                            border: 0
                                        }}
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    />
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Pros & Cons */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                        <div className="card" style={{ padding: '2rem' }}>
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#81c995' }}>
                                <Check size={20} /> Pros
                            </h3>
                            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                {(game.pros || ['Stunning Visuals', 'Immersive Story', 'Smooth Gameplay', 'Great Soundtrack']).map((item, i) => (
                                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)' }}>
                                        <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#81c995' }}></div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="card" style={{ padding: '2rem' }}>
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#e57373' }}>
                                <X size={20} /> Cons
                            </h3>
                            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                {(game.cons || ['Steep Learning Curve', 'Minor Bugs']).map((item, i) => (
                                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)' }}>
                                        <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#e57373' }}></div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </motion.div>

                {/* Sidebar */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                    <div className="card" style={{ padding: '2rem', position: 'sticky', top: '100px' }}>
                        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                            <div style={{ fontSize: '4rem', fontWeight: '800', color: 'var(--color-primary)', lineHeight: '1' }}>{game.rating}</div>
                            <div style={{ color: 'var(--text-secondary)' }}>out of 5.0</div>
                        </div>

                        {/* Download Button - Links to Steam or appropriate store */}
                        <a
                            href={
                                // Extract Steam ID from image URL if it exists
                                game.image?.includes('steam/apps/')
                                    ? `https://store.steampowered.com/app/${game.image.match(/apps\/(\d+)/)?.[1]}/`
                                    : `https://www.google.com/search?q=buy+${encodeURIComponent(game.title)}`
                            }
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary"
                            style={{ width: '100%', marginBottom: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}
                        >
                            Download Now <Download size={18} />
                        </a>

                        {/* Cheat Sheet / Guide Locker */}
                        <div style={{
                            marginTop: '2rem',
                            background: 'linear-gradient(145deg, #1e293b, #0f172a)',
                            borderRadius: 'var(--radius-md)',
                            border: '1px solid rgba(0, 255, 157, 0.2)',
                            overflow: 'hidden'
                        }}>
                            <div style={{ padding: '1.5rem', textAlign: 'center', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                                <div style={{
                                    textTransform: 'uppercase',
                                    fontSize: '0.75rem',
                                    letterSpacing: '0.1em',
                                    color: 'var(--color-primary)',
                                    marginBottom: '0.5rem',
                                    fontWeight: 'bold'
                                }}>
                                    Exclusive Content
                                </div>
                                <h4 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                                    <span role="img" aria-label="lock">🔒</span> {game.cheatSheet?.title || "Ultimate Guide & Cheats"}
                                </h4>
                                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                                    {game.cheatSheet?.content || "Unlock hidden items, strategies, and exclusive bonuses."}
                                </p>
                            </div>

                            <div style={{ position: 'relative', padding: '1.5rem' }}>
                                {/* Blurred Content Preview */}
                                <div style={{
                                    filter: 'blur(4px)',
                                    opacity: 0.5,
                                    fontSize: '0.8rem',
                                    fontFamily: 'monospace',
                                    lineHeight: '1.6',
                                    userSelect: 'none',
                                    pointerEvents: 'none'
                                }}>
                                    {(game.cheatSheet?.preview || [
                                        "[HIDDEN ITEM]: Location unknown...",
                                        "[SECRET BOSS]: Unlock requirements...",
                                        "[MAX LEVEL]: Farm XP fast...",
                                        "[BEST BUILD]: Optimal loadout..."
                                    ]).map((line, i) => (
                                        <div key={i}>{line}</div>
                                    ))}
                                </div>

                                {/* Overlay Button */}
                                <div style={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    width: '100%',
                                    height: '100%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    background: 'rgba(15, 23, 42, 0.6)'
                                }}>
                                    <button
                                        onClick={() => alert('This would open your CPA/OGAds Content Locker!')}
                                        className="btn"
                                        style={{
                                            background: 'var(--color-primary)',
                                            color: '#000',
                                            fontWeight: 'bold',
                                            padding: '10px 20px',
                                            fontSize: '0.9rem',
                                            boxShadow: '0 0 20px rgba(0, 255, 157, 0.4)',
                                            animation: 'pulse 2s infinite'
                                        }}
                                    >
                                        UNLOCK NOW
                                    </button>
                                </div>
                            </div>
                        </div>

                        {embedUrl && (
                            <button
                                onClick={() => setShowTrailerModal(true)}
                                className="btn btn-outline"
                                style={{ width: '100%', marginTop: '1rem', marginBottom: '1rem' }}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <polygon points="5 3 19 12 5 21 5 3"></polygon>
                                </svg>
                                Watch Trailer
                            </button>
                        )}

                        <div style={{ borderTop: '1px solid var(--bg-primary)', paddingTop: '1.5rem', marginTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem' }}>
                                <span style={{ color: 'var(--text-muted)' }}>Release Date</span>
                                <span>Oct 2023</span>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem' }}>
                                <span style={{ color: 'var(--text-muted)' }}>Developer</span>
                                <span>Studio X</span>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem' }}>
                                <span style={{ color: 'var(--text-muted)' }}>Platform</span>
                                <span>PC, PS5</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Trailer Modal */}
            {showTrailerModal && embedUrl && (
                <div
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        background: 'rgba(0,0,0,0.95)',
                        zIndex: 2000,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: '20px'
                    }}
                    onClick={() => setShowTrailerModal(false)}
                >
                    <div
                        style={{
                            position: 'relative',
                            width: '100%',
                            maxWidth: '1200px',
                            aspectRatio: '16/9',
                            background: '#000',
                            borderRadius: '12px',
                            overflow: 'hidden'
                        }}
                        onClick={e => e.stopPropagation()}
                    >
                        <button
                            onClick={() => setShowTrailerModal(false)}
                            style={{
                                position: 'absolute',
                                top: '15px',
                                right: '15px',
                                background: 'rgba(0,0,0,0.7)',
                                color: '#fff',
                                border: 'none',
                                borderRadius: '50%',
                                width: '40px',
                                height: '40px',
                                cursor: 'pointer',
                                zIndex: 10,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '1.5rem',
                                fontWeight: 'bold',
                                transition: 'background 0.2s'
                            }}
                            onMouseOver={(e) => e.currentTarget.style.background = 'rgba(0,0,0,0.9)'}
                            onMouseOut={(e) => e.currentTarget.style.background = 'rgba(0,0,0,0.7)'}
                        >
                            ×
                        </button>
                        <iframe
                            src={embedUrl}
                            title={`${game.title} Trailer`}
                            style={{
                                width: '100%',
                                height: '100%',
                                border: 0
                            }}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Review;
