import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Gamepad2, ArrowRight } from 'lucide-react';
import AuthModal from '../components/AuthModal';
import heroIllustration from '../assets/hero-illustration.png';

const Welcome = () => {
    const [showAuthModal, setShowAuthModal] = useState(false);
    const [authMode, setAuthMode] = useState('login');

    const openAuthModal = (mode) => {
        setAuthMode(mode);
        setShowAuthModal(true);
    };

    return (
        <div style={{
            position: 'relative',
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
            background: '#000'
        }}>
            <Helmet>
                <title>Welcome to GameFlex - Login Required</title>
                <meta name="description" content="Join GameFlex to access exclusive game reviews and deals." />
            </Helmet>

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
                    alt="Background"
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        filter: 'brightness(0.3) saturate(1.2)'
                    }}
                />
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'radial-gradient(circle at center, rgba(0,0,0,0.4) 0%, #000 90%)'
                }} />
            </div>

            {/* Content */}
            <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center', maxWidth: '800px' }}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '1rem',
                            background: 'rgba(255,255,255,0.05)',
                            padding: '12px 24px',
                            borderRadius: '100px',
                            border: '1px solid rgba(255,255,255,0.1)'
                        }}>
                            <Gamepad2 size={32} color="var(--color-primary)" />
                            <span style={{
                                fontSize: '1.5rem',
                                fontWeight: '700',
                                letterSpacing: '0.05em',
                                color: '#fff',
                                fontFamily: 'var(--font-heading)',
                                textTransform: 'uppercase'
                            }}>
                                GameFlex
                            </span>
                        </div>
                    </div>

                    <h1 style={{
                        fontSize: 'clamp(3rem, 6vw, 5rem)',
                        fontWeight: '800',
                        lineHeight: '1.1',
                        marginBottom: '1.5rem',
                        color: '#fff',
                        textShadow: '0 0 40px rgba(138, 180, 248, 0.3)'
                    }}>
                        UNLOCK THE <br />
                        <span style={{
                            background: 'linear-gradient(135deg, #8ab4f8 0%, #81c995 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                        }}>
                            ULTIMATE EXPERIENCE
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
                        Join our exclusive community of gamers. Register now to access premium reviews, download links, and special bonuses.
                    </p>

                    <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => openAuthModal('signup')}
                            className="btn btn-primary"
                            style={{
                                fontSize: '1.1rem',
                                padding: '16px 40px',
                                minWidth: '200px'
                            }}
                        >
                            Get Started <ArrowRight size={20} />
                        </motion.button>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => openAuthModal('login')}
                            className="btn btn-outline"
                            style={{
                                fontSize: '1.1rem',
                                padding: '16px 40px',
                                minWidth: '200px',
                                background: 'rgba(0,0,0,0.5)',
                                backdropFilter: 'blur(10px)'
                            }}
                        >
                            Log In
                        </motion.button>
                    </div>
                </motion.div>
            </div>

            <AuthModal
                isOpen={showAuthModal}
                onClose={() => setShowAuthModal(false)}
                initialMode={authMode}
            />
        </div>
    );
};

export default Welcome;
