import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Gamepad2, Trophy, Zap, Monitor, Users, Ghost, Brain, Crosshair, Box } from 'lucide-react';
import { GAMES } from '../data/games';

// Map categories to icons
const CATEGORY_ICONS = {
    'Action': Zap,
    'RPG': Trophy,
    'Strategy': Brain,
    'Shooter': Crosshair,
    'Adventure': Gamepad2,
    'Puzzle': Ghost,
    'Simulation': Monitor,
    'Multiplayer': Users,
    'Sandbox': Box,
    'Sports': Trophy,
    'Horror': Ghost
};

// Descriptions for each category to add flavor
const CATEGORY_DESCRIPTIONS = {
    'Action': "Pulse-pounding excitement and fast-paced gameplay.",
    'RPG': "Deep stories, character progression, and immersive worlds.",
    'Strategy': "Tactical challenges that test your planning and wit.",
    'Shooter': "Precision aim and competitive combat scenarios.",
    'Adventure': "Epic journeys, exploration, and discovery.",
    'Puzzle': "Brain-teasing challenges to sharpen your mind.",
    'Simulation': "Realistic experiences from everyday life to sci-fi.",
    'Multiplayer': "Connect, compete, and cooperate with friends.",
    'Sandbox': "Freedom to create, build, and explore without limits.",
    'Sports': "Competitive athletic simulations and management.",
    'Horror': "Spine-chilling experiences and survival challenges."
};

const Categories = () => {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Calculate categories from local GAMES data for instant loading
        const processCategories = () => {
            const counts = {};
            const images = {};

            GAMES.forEach(game => {
                // Count games per category
                counts[game.category] = (counts[game.category] || 0) + 1;

                // Keep the first high-quality image found for the category cover
                if (!images[game.category] && game.image) {
                    images[game.category] = game.image;
                }
            });

            const formattedCategories = Object.entries(counts).map(([name, count]) => ({
                name,
                count,
                icon: CATEGORY_ICONS[name] || Gamepad2,
                image: images[name],
                description: CATEGORY_DESCRIPTIONS[name] || "Explore the best games in this genre."
            }));

            // Sort by count (popular first)
            setCategories(formattedCategories.sort((a, b) => b.count - a.count));
            setLoading(false);
        };

        processCategories();
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100
            }
        }
    };

    if (loading) {
        return (
            <div className="container" style={{ paddingTop: '120px', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div className="loading-spinner"></div>
            </div>
        );
    }

    return (
        <div style={{ minHeight: '100vh', paddingBottom: '80px', background: 'var(--bg-dark)' }}>
            <Helmet>
                <title>Browse Categories - GameFlex</title>
                <meta name="description" content="Explore our massive collection of games by genre. Action, RPG, Strategy, and more." />
            </Helmet>

            {/* Hero Section */}
            <div style={{
                position: 'relative',
                padding: '160px 0 80px',
                background: 'linear-gradient(to bottom, rgba(0,0,0,0.8), var(--bg-dark)), url("https://cdn.cloudflare.steamstatic.com/steam/apps/1091500/header.jpg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                textAlign: 'center',
                marginBottom: '60px'
            }}>
                <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                    <motion.h1
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        style={{
                            fontSize: 'clamp(3rem, 6vw, 5rem)',
                            fontWeight: '800',
                            marginBottom: '20px',
                            background: 'linear-gradient(135deg, #fff 0%, rgba(255,255,255,0.7) 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            textShadow: '0 4px 30px rgba(0,0,0,0.5)'
                        }}
                    >
                        EXPLORE <span style={{ color: 'var(--color-primary)', WebkitTextFillColor: 'var(--color-primary)' }}>GENRES</span>
                    </motion.h1>
                    <motion.p
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        style={{
                            fontSize: '1.2rem',
                            color: 'var(--text-secondary)',
                            maxWidth: '600px',
                            margin: '0 auto'
                        }}
                    >
                        Dive into our curated collection of games across every genre imaginable. Find your next obsession today.
                    </motion.p>
                </div>
            </div>

            {/* Categories Grid */}
            <div className="container">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
                        gap: '2rem'
                    }}
                >
                    {categories.map((cat) => (
                        <motion.div key={cat.name} variants={itemVariants}>
                            <Link
                                to={`/?category=${cat.name}`}
                                style={{ textDecoration: 'none' }}
                            >
                                <div
                                    className="category-card"
                                    style={{
                                        position: 'relative',
                                        height: '250px',
                                        borderRadius: '24px',
                                        overflow: 'hidden',
                                        border: '1px solid rgba(255,255,255,0.1)',
                                        transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                                        cursor: 'pointer'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)';
                                        e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.4)';
                                        e.currentTarget.querySelector('.bg-image').style.transform = 'scale(1.1)';
                                        e.currentTarget.querySelector('.overlay').style.background = 'linear-gradient(to top, rgba(0,0,0,0.9), rgba(0,0,0,0.2))';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.transform = 'translateY(0) scale(1)';
                                        e.currentTarget.style.boxShadow = 'none';
                                        e.currentTarget.querySelector('.bg-image').style.transform = 'scale(1)';
                                        e.currentTarget.querySelector('.overlay').style.background = 'linear-gradient(to top, rgba(0,0,0,0.9), rgba(0,0,0,0.4))';
                                    }}
                                >
                                    {/* Background Image */}
                                    <div
                                        className="bg-image"
                                        style={{
                                            position: 'absolute',
                                            top: 0,
                                            left: 0,
                                            width: '100%',
                                            height: '100%',
                                            backgroundImage: `url(${cat.image || 'https://via.placeholder.com/400x300'})`,
                                            backgroundSize: 'cover',
                                            backgroundPosition: 'center',
                                            transition: 'transform 0.6s ease'
                                        }}
                                    />

                                    {/* Overlay */}
                                    <div
                                        className="overlay"
                                        style={{
                                            position: 'absolute',
                                            top: 0,
                                            left: 0,
                                            width: '100%',
                                            height: '100%',
                                            background: 'linear-gradient(to top, rgba(0,0,0,0.9), rgba(0,0,0,0.4))',
                                            transition: 'background 0.3s ease'
                                        }}
                                    />

                                    {/* Content */}
                                    <div style={{
                                        position: 'relative',
                                        zIndex: 2,
                                        height: '100%',
                                        padding: '2rem',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'flex-end'
                                    }}>
                                        <div style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            marginBottom: '10px'
                                        }}>
                                            <div style={{
                                                background: 'var(--color-primary)',
                                                borderRadius: '12px',
                                                padding: '8px',
                                                display: 'flex',
                                                marginRight: '12px',
                                                boxShadow: '0 4px 15px rgba(22, 163, 74, 0.4)'
                                            }}>
                                                <cat.icon size={20} color="white" />
                                            </div>
                                            <span style={{
                                                background: 'rgba(255,255,255,0.1)',
                                                padding: '4px 12px',
                                                borderRadius: '20px',
                                                fontSize: '0.85rem',
                                                backdropFilter: 'blur(4px)',
                                                color: '#fff'
                                            }}>
                                                {cat.count} Games
                                            </span>
                                        </div>

                                        <h2 style={{
                                            fontSize: '1.8rem',
                                            fontWeight: '700',
                                            margin: '0 0 8px 0',
                                            color: '#fff',
                                            letterSpacing: '-0.02em'
                                        }}>
                                            {cat.name}
                                        </h2>

                                        <p style={{
                                            color: 'rgba(255,255,255,0.7)',
                                            fontSize: '0.95rem',
                                            margin: 0,
                                            lineHeight: '1.5',
                                            display: '-webkit-box',
                                            WebkitLineClamp: 2,
                                            WebkitBoxOrient: 'vertical',
                                            overflow: 'hidden'
                                        }}>
                                            {cat.description}
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default Categories;
