import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <div className="container" style={{ paddingTop: '120px', paddingBottom: '80px', maxWidth: '800px' }}>
            <Helmet>
                <title>About Us - GameZone</title>
                <meta name="description" content="Learn more about GameZone, your ultimate destination for honest game reviews and exclusive deals." />
            </Helmet>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h1 style={{ fontSize: '3rem', marginBottom: '2rem', color: 'var(--text-primary)' }}>About Us</h1>
                <div className="card" style={{ padding: '2rem' }}>
                    <p style={{ marginBottom: '1.5rem', lineHeight: '1.8', color: 'var(--text-secondary)' }}>
                        Welcome to <strong>GameZone</strong>, your premier destination for in-depth game reviews, curated deals, and the latest industry news.
                    </p>
                    <p style={{ marginBottom: '1.5rem', lineHeight: '1.8', color: 'var(--text-secondary)' }}>
                        Established in 2024, GameZone was built by gamers, for gamers. Our team of dedicated editors and reviewers spends countless hours exploring every corner of the gaming world—from AAA blockbusters to hidden indie gems—to bring you honest, unbiased coverage.
                    </p>
                    <p style={{ lineHeight: '1.8', color: 'var(--text-secondary)' }}>
                        We believe that gaming is more than just a hobby; it's a culture. That's why we are committed to providing a platform that not only informs but also connects our community. Every game listed on our site is rigorously tested to ensure we only recommend the best experiences available.
                    </p>
                </div>
            </motion.div>
        </div>
    );
};

export default About;
