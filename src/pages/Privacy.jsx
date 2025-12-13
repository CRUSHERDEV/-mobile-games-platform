import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

const Privacy = () => {
    return (
        <div className="container" style={{ paddingTop: '120px', paddingBottom: '80px', maxWidth: '800px' }}>
            <Helmet>
                <title>Privacy Policy - GameFlex</title>
                <meta name="description" content="Read our Privacy Policy to understand how we collect, use, and protect your personal information." />
            </Helmet>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h1 style={{ fontSize: '3rem', marginBottom: '2rem', color: 'var(--text-primary)' }}>Privacy Policy</h1>
                <div className="card" style={{ padding: '3rem' }}>
                    <h3 style={{ color: 'var(--text-primary)', marginBottom: '1rem' }}>1. Information We Collect</h3>
                    <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', lineHeight: '1.6' }}>
                        We collect information you provide directly to us, such as when you create an account, subscribe to our newsletter, or contact us for support.
                    </p>

                    <h3 style={{ color: 'var(--text-primary)', marginBottom: '1rem' }}>2. How We Use Your Information</h3>
                    <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', lineHeight: '1.6' }}>
                        We use the information we collect to provide, maintain, and improve our services, to communicate with you, and to personalize your experience.
                    </p>

                    <h3 style={{ color: 'var(--text-primary)', marginBottom: '1rem' }}>3. Data Security</h3>
                    <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', lineHeight: '1.6' }}>
                        We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction.
                    </p>

                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: '3rem' }}>
                        Last updated: November 2024
                    </p>
                </div>
            </motion.div>
        </div>
    );
};

export default Privacy;
