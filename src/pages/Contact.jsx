import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';

const Contact = () => {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <div className="container" style={{ paddingTop: '120px', paddingBottom: '80px', maxWidth: '800px' }}>
            <Helmet>
                <title>Contact Us - GameZone</title>
                <meta name="description" content="Get in touch with the GameZone team. We're here to help with any questions or feedback." />
            </Helmet>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h1 style={{ fontSize: '3rem', marginBottom: '2rem', color: 'var(--text-primary)' }}>Contact Us</h1>

                <div style={{ display: 'grid', gap: '2rem', gridTemplateColumns: '1fr 1.5fr' }}>
                    {/* Contact Info */}
                    <div className="card" style={{ padding: '2rem' }}>
                        <h3 style={{ marginBottom: '1.5rem', color: 'var(--text-primary)' }}>Get in Touch</h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--text-secondary)' }}>
                                <Mail size={20} color="var(--color-primary)" />
                                <span>contact@gamezone.com</span>
                            </div>
                            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.6' }}>
                                We typically respond to all inquiries within 24-48 hours. For partnership opportunities, please mention "Partnership" in your subject line.
                            </p>
                        </div>
                    </div>

                    {/* Form */}
                    <div className="card" style={{ padding: '2rem' }}>
                        {submitted ? (
                            <div style={{ textAlign: 'center', padding: '2rem 0' }}>
                                <h3 style={{ color: 'var(--color-accent)', marginBottom: '1rem' }}>Message Sent!</h3>
                                <p style={{ color: 'var(--text-secondary)' }}>We'll get back to you as soon as possible.</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                <div>
                                    <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>Name</label>
                                    <input required type="text" style={{ width: '100%', padding: '12px', borderRadius: 'var(--radius-sm)', background: 'var(--bg-primary)', border: '1px solid rgba(255,255,255,0.1)', color: 'var(--text-primary)' }} />
                                </div>
                                <div>
                                    <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>Email</label>
                                    <input required type="email" style={{ width: '100%', padding: '12px', borderRadius: 'var(--radius-sm)', background: 'var(--bg-primary)', border: '1px solid rgba(255,255,255,0.1)', color: 'var(--text-primary)' }} />
                                </div>
                                <div>
                                    <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>Message</label>
                                    <textarea required rows="4" style={{ width: '100%', padding: '12px', borderRadius: 'var(--radius-sm)', background: 'var(--bg-primary)', border: '1px solid rgba(255,255,255,0.1)', color: 'var(--text-primary)' }}></textarea>
                                </div>
                                <button type="submit" className="btn btn-primary" style={{ marginTop: '1rem' }}>Send Message</button>
                            </form>
                        )}
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default Contact;
