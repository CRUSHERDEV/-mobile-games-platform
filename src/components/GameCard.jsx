import React from 'react';
import { Star, ExternalLink, Download } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const GameCard = ({ game, index, onWatchTrailer }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05, duration: 0.5 }}
            className="card"
            style={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                overflow: 'hidden'
            }}
        >
            {/* Image Container */}
            <div style={{
                width: '100%',
                aspectRatio: '16/9',
                position: 'relative',
                overflow: 'hidden',
            }}>
                <img
                    src={game.image}
                    alt={game.title}
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 0.5s ease',
                        background: '#1a1a1a'
                    }}
                    onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                    onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                    onError={(e) => {
                        if (e.target.src && !e.target.src.includes('placehold.co')) {
                            e.target.onerror = null;
                            e.target.src = `https://placehold.co/400x400/1a1a1a/8ab4f8?text=${encodeURIComponent(game.title.substring(0, 20))}`;
                        }
                    }}
                />

                {/* Rating Badge */}
                <div style={{
                    position: 'absolute',
                    top: '8px',
                    right: '8px',
                    background: 'rgba(0,0,0,0.7)',
                    backdropFilter: 'blur(4px)',
                    padding: '3px 8px',
                    borderRadius: '100px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '3px',
                    color: '#ffd700',
                    fontWeight: '600',
                    fontSize: '0.75rem',
                    zIndex: 2
                }}>
                    <Star size={12} fill="#ffd700" /> {game.rating}
                </div>
            </div>

            {/* Content */}
            <div style={{ padding: '0.75rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <div style={{ marginBottom: 'auto' }}>
                    <h3 style={{
                        fontSize: '0.95rem',
                        fontWeight: '600',
                        marginBottom: '0.25rem',
                        color: 'var(--text-primary)',
                        lineHeight: '1.3',
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden'
                    }}>
                        {game.title}
                    </h3>

                    <span style={{
                        fontSize: '0.7rem',
                        color: 'var(--text-secondary)',
                        fontWeight: '500'
                    }}>
                        {game.category}
                    </span>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem', marginTop: '0.75rem' }}>
                    <Link
                        to={`/review/${game.id}`}
                        className="btn btn-outline"
                        style={{
                            fontSize: '0.75rem',
                            padding: '6px 8px',
                            borderRadius: 'var(--radius-full)'
                        }}
                    >
                        Review
                    </Link>
                    <a
                        href={
                            game.image?.includes('steam/apps/')
                                ? `https://store.steampowered.com/app/${game.image.match(/apps\/(\d+)/)?.[1]}/`
                                : `https://www.google.com/search?q=buy+${encodeURIComponent(game.title)}`
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary"
                        style={{
                            fontSize: '0.75rem',
                            padding: '6px 8px',
                            borderRadius: 'var(--radius-full)'
                        }}
                    >
                        Download
                    </a>
                </div>

                {/* Trailer Button */}
                {(game.trailerUrl || game.trailer_url) && onWatchTrailer && (
                    <button
                        onClick={(e) => {
                            e.preventDefault();
                            onWatchTrailer();
                        }}
                        style={{
                            marginTop: '0.5rem',
                            width: '100%',
                            background: 'rgba(255, 255, 255, 0.1)',
                            border: 'none',
                            borderRadius: 'var(--radius-full)',
                            padding: '5px',
                            color: 'var(--text-secondary)',
                            fontSize: '0.7rem',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '4px',
                            transition: 'all 0.2s ease'
                        }}
                        onMouseOver={(e) => {
                            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
                            e.currentTarget.style.color = '#fff';
                        }}
                        onMouseOut={(e) => {
                            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                            e.currentTarget.style.color = 'var(--text-secondary)';
                        }}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polygon points="5 3 19 12 5 21 5 3"></polygon>
                        </svg>
                        Watch Trailer
                    </button>
                )}
            </div>
        </motion.div>
    );
};

export default GameCard;
