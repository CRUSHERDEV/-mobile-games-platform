import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Zap } from 'lucide-react';
import heroIllustration from '../assets/hero-illustration.png';

const Hero = () => {
    return (
        <section style={{
            position: 'relative',
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
            paddingTop: '80px'
        }}>
            {/* Background Image with Overlay */}
            {/* Background Image with Overlay */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: 0
            }}>
                <img
                    src={heroIllustration}
                    alt="Hero Background"
                    fetchPriority="high"
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        filter: 'brightness(0.4) saturate(1.2)'
                    }}
                />
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(to bottom, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,1) 100%)'
                }} />
            </div>

            {/* Main Content */}
            <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    style={{ maxWidth: '800px', margin: '0 auto' }}
                >


                    <h1 style={{
                        fontSize: 'clamp(3.5rem, 8vw, 6.5rem)',
                        fontWeight: '800',
                        lineHeight: '1',
                        marginBottom: '1.5rem',
                        color: '#fff',
                        textShadow: '0 0 40px rgba(138, 180, 248, 0.3)'
                    }}>
                        LEVEL UP YOUR <br />
                        <span style={{
                            background: 'linear-gradient(135deg, #8ab4f8 0%, #81c995 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                            display: 'inline-block'
                        }}>
                            GAMING
                        </span>
                    </h1>

                    <p style={{
                        fontSize: '1.25rem',
                        color: 'rgba(255, 255, 255, 0.8)',
                        marginBottom: '3rem',
                        lineHeight: '1.6',
                        maxWidth: '600px',
                        marginLeft: 'auto',
                        marginRight: 'auto'
                    }}>
                        Discover top-rated games, unlock exclusive bonuses, and dominate with expert reviews.
                        Your ultimate gaming destination starts here.
                    </p>

                    <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '4rem' }}>
                        <motion.button
                            className="btn btn-primary"
                            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(138, 180, 248, 0.6)' }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => {
                                const featuredSection = document.getElementById('featured-games');
                                if (featuredSection) {
                                    featuredSection.scrollIntoView({ behavior: 'smooth' });
                                }
                            }}
                            style={{
                                fontSize: '1.1rem',
                                padding: '16px 40px',
                                background: 'var(--color-primary)',
                                color: '#000',
                                fontWeight: '700',
                                textTransform: 'uppercase',
                                letterSpacing: '0.05em'
                            }}
                        >
                            Explore Games <ArrowRight size={20} />
                        </motion.button>
                    </div>

                    {/* Stats */}
                    <motion.div
                        style={{
                            display: 'flex',
                            gap: '4rem',
                            justifyContent: 'center',
                            flexWrap: 'wrap',
                            // borderTop removed for seamless look
                            paddingTop: '3rem'
                        }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                    >
                        {[
                            { number: '500+', label: 'Games' },
                            { number: '50K+', label: 'Players' },
                            { number: '4.9★', label: 'Rating' }
                        ].map((stat, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ scale: 1.1 }}
                                style={{ textAlign: 'center' }}
                            >
                                <div style={{
                                    fontSize: '2.5rem',
                                    fontWeight: '700',
                                    color: '#fff',
                                    lineHeight: '1',
                                    fontFamily: 'var(--font-heading)'
                                }}>
                                    {stat.number}
                                </div>
                                <div style={{
                                    fontSize: '0.9rem',
                                    color: 'var(--color-primary)',
                                    marginTop: '8px',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.1em',
                                    fontWeight: '600'
                                }}>
                                    {stat.label}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
