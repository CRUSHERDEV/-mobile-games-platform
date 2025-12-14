import React, { useState } from 'react';
import { Gamepad2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { supabase } from '../supabaseClient';
import { trackNewsletterSignup } from '../utils/analytics';

const Footer = () => {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState('idle'); // idle, loading, success, error

    const handleSubscribe = async () => {
        if (!email) return;
        setStatus('loading');
        try {
            // 1. Insert into DB
            const { error: dbError } = await supabase
                .from('newsletter_subscribers')
                .insert([{ email }]);

            if (dbError) {
                // Ignore duplicate key error (23505)
                if (dbError.code === '23505') {
                    console.log('Email already subscribed');
                    // We can still proceed to send the welcome email if we want, 
                    // or just show success. Let's show success.
                    setStatus('success');
                    setEmail('');
                    return;
                }
                throw dbError;
            }

            // 2. Call Vercel Serverless Function to send email
            // Note: We do this optimistically. If email fails, we still subscribed them.
            const response = await fetch('/api/subscribe', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                console.warn('Email sending failed:', errorData);
                // We don't fail the whole process if just the email fails, 
                // but you might want to log it or handle it differently.
            }

            // Track newsletter signup in Google Analytics
            trackNewsletterSignup('footer');

            setStatus('success');
            setEmail('');
        } catch (error) {
            console.error('Error subscribing:', error);
            setStatus('error');
        }
    };

    return (
        <footer style={{
            background: 'var(--bg-secondary)',
            paddingTop: '4rem',
            paddingBottom: '2rem',
            marginTop: 'auto'
        }}>
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '3rem', marginBottom: '3rem' }}>

                    {/* Brand */}
                    <div>
                        <div className="flex items-center gap-2 mb-4" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                            <Gamepad2 size={24} color="var(--color-primary)" />
                            <span className="text-xl font-bold" style={{ fontSize: '1.8rem', letterSpacing: '0.02em', color: 'var(--text-primary)', fontFamily: 'var(--font-heading)', textTransform: 'uppercase' }}>
                                GameFlex
                            </span>
                        </div>
                        <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                            Your ultimate destination for game reviews, exclusive bonuses, and the latest gaming news.
                        </p>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '1.5rem', color: 'var(--text-primary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Quick Links</h4>
                        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                            <li><Link to="/about-us" style={{ color: 'var(--text-secondary)' }}>About Us</Link></li>
                            <li><Link to="/contact" style={{ color: 'var(--text-secondary)' }}>Contact</Link></li>
                            <li><Link to="/privacy-policy" style={{ color: 'var(--text-secondary)' }}>Privacy Policy</Link></li>
                            <li><Link to="/terms-of-service" style={{ color: 'var(--text-secondary)' }}>Terms of Service</Link></li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '1.5rem', color: 'var(--text-primary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Stay Updated</h4>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>Subscribe to our newsletter for exclusive drops.</p>

                        {status === 'success' ? (
                            <div style={{ color: 'var(--color-accent)', padding: '10px', background: 'rgba(129, 201, 149, 0.1)', borderRadius: 'var(--radius-sm)' }}>
                                Thanks for subscribing!
                            </div>
                        ) : (
                            <div style={{ display: 'flex', gap: '0.5rem' }}>
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    disabled={status === 'loading'}
                                    aria-label="Email address"
                                    style={{
                                        background: 'var(--bg-surface)',
                                        border: '1px solid transparent',
                                        padding: '12px',
                                        borderRadius: 'var(--radius-full)',
                                        color: 'var(--text-primary)',
                                        flex: 1,
                                        outline: 'none',
                                        transition: 'var(--transition-standard)'
                                    }}
                                    onFocus={(e) => { e.target.style.background = 'var(--bg-primary)'; e.target.style.border = '1px solid var(--color-primary)'; }}
                                    onBlur={(e) => { e.target.style.background = 'var(--bg-surface)'; e.target.style.border = '1px solid transparent'; }}
                                />
                                <button
                                    className="btn btn-primary"
                                    style={{ padding: '10px 24px', opacity: status === 'loading' ? 0.7 : 1 }}
                                    onClick={handleSubscribe}
                                    disabled={status === 'loading'}
                                    aria-label="Subscribe"
                                >
                                    {status === 'loading' ? '...' : 'Go'}
                                </button>
                            </div>
                        )}
                        {status === 'error' && <p style={{ color: '#ff6b6b', fontSize: '0.85rem', marginTop: '0.5rem' }}>Something went wrong. Try again.</p>}
                    </div>
                </div>

                <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>© 2024 GameFlex. All rights reserved.</p>
                    <div style={{ display: 'flex', gap: '1rem' }}>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
