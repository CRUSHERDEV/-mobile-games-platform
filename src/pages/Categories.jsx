import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Gamepad2, Trophy, Zap, Monitor, Users, Ghost, Brain, Crosshair, Box } from 'lucide-react';
import { supabase } from '../supabaseClient';

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

const Categories = () => {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const { data, error } = await supabase
                    .from('games')
                    .select('category');

                if (error) throw error;

                if (data) {
                    const counts = data.reduce((acc, game) => {
                        acc[game.category] = (acc[game.category] || 0) + 1;
                        return acc;
                    }, {});

                    const formattedCategories = Object.entries(counts).map(([name, count]) => ({
                        name,
                        count,
                        icon: CATEGORY_ICONS[name] || Gamepad2
                    }));

                    setCategories(formattedCategories);
                }
            } catch (error) {
                console.error('Error fetching categories:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchCategories();
    }, []);

    if (loading) {
        return (
            <div className="container pt-32 text-center flex-center" style={{ minHeight: '60vh' }}>
                <div style={{ fontSize: '1.5rem', color: 'var(--color-primary)' }}>Loading...</div>
            </div>
        );
    }
    return (
        <div className="container" style={{ paddingTop: '120px', paddingBottom: '80px' }}>
            <Helmet>
                <title>Game Categories - GameFlex</title>
                <meta name="description" content="Browse games by category: Action, RPG, Strategy, and more. Find your next favorite game on GameFlex." />
            </Helmet>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <h1 style={{
                    fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                    fontWeight: '700',
                    marginBottom: '3rem',
                    textAlign: 'center',
                    color: 'var(--text-primary)',
                    letterSpacing: '-0.02em'
                }}>
                    Browse by <span style={{ color: 'var(--color-primary)' }}>Category</span>
                </h1>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                    gap: '2rem'
                }}>
                    {categories.map((cat, index) => (
                        <motion.div
                            key={cat.name}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Link
                                to={`/?category=${cat.name}`}
                                className="card"
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    padding: '3rem 2rem',
                                    textAlign: 'center',
                                    textDecoration: 'none',
                                    height: '100%',
                                    border: '1px solid transparent'
                                }}
                                onMouseOver={(e) => {
                                    e.currentTarget.style.borderColor = 'var(--color-primary)';
                                    e.currentTarget.style.transform = 'translateY(-4px)';
                                }}
                                onMouseOut={(e) => {
                                    e.currentTarget.style.borderColor = 'transparent';
                                    e.currentTarget.style.transform = 'translateY(0)';
                                }}
                            >
                                <div style={{
                                    background: 'rgba(138, 180, 248, 0.1)',
                                    padding: '20px',
                                    borderRadius: '50%',
                                    marginBottom: '1.5rem',
                                    color: 'var(--color-primary)'
                                }}>
                                    <cat.icon size={40} />
                                </div>
                                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>{cat.name}</h3>
                                <p style={{ color: 'var(--text-secondary)' }}>{cat.count} Games</p>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
};

export default Categories;
