import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CookieConsent = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem('cookieConsent');
        if (!consent) {
            setIsVisible(true);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem('cookieConsent', 'accepted');
        setIsVisible(false);
    };

    const handleReject = () => {
        localStorage.setItem('cookieConsent', 'rejected');
        setIsVisible(false);
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    style={{
                        position: 'fixed',
                        bottom: '20px',
                        left: '20px',
                        right: '20px',
                        maxWidth: '600px',
                        background: 'var(--bg-surface)',
                        padding: '24px',
                        borderRadius: 'var(--radius-md)',
                        boxShadow: 'var(--shadow-lg)',
                        zIndex: 9999,
                        border: '1px solid rgba(138, 180, 248, 0.2)',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '16px'
                    }}
                >
                    <div>
                        <h3 style={{
                            fontSize: '1.1rem',
                            fontWeight: '600',
                            marginBottom: '8px',
                            color: 'var(--text-primary)'
                        }}>
                            🍪 Cookie Consent
                        </h3>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.6' }}>
                            We use cookies to enhance your browsing experience, provide personalized content, and analyze our traffic.
                            Your privacy matters to us. You can accept or reject cookies at any time.
                        </p>
                    </div>
                    <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end', flexWrap: 'wrap' }}>
                        <button
                            onClick={handleReject}
                            className="btn btn-outline"
                            style={{
                                padding: '10px 24px',
                                fontSize: '0.9rem',
                                minWidth: '100px',
                                transition: 'all 0.3s ease'
                            }}
                        >
                            Reject
                        </button>
                        <button
                            onClick={handleAccept}
                            className="btn btn-primary"
                            style={{
                                padding: '10px 24px',
                                fontSize: '0.9rem',
                                minWidth: '100px',
                                transition: 'all 0.3s ease'
                            }}
                        >
                            Accept
                        </button>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default CookieConsent;
