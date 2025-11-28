import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, Lock, User, Eye, EyeOff, Github, Chrome } from 'lucide-react';
import { supabase } from '../supabaseClient';

const AuthModal = ({ isOpen, onClose, initialMode = 'login' }) => {
    const [mode, setMode] = useState(initialMode); // 'login' or 'signup'
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [fullName, setFullName] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');

    const handleEmailAuth = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        setMessage('');

        try {
            if (mode === 'signup') {
                const { data, error } = await supabase.auth.signUp({
                    email,
                    password,
                    options: {
                        data: {
                            full_name: fullName,
                        }
                    }
                });

                if (error) throw error;

                setMessage('Success! Please check your email to confirm your account.');
                // Don't clear email so they can easily see it
                setPassword('');
                setFullName('');
            } else {
                const { data, error } = await supabase.auth.signInWithPassword({
                    email,
                    password,
                });

                if (error) throw error;

                setMessage('Successfully logged in!');
                setTimeout(() => {
                    onClose();
                    window.location.reload(); // Refresh to update UI
                }, 1000);
            }
        } catch (error) {
            console.error("Auth error:", error);
            if (error.message === "Invalid login credentials") {
                setError("Invalid credentials. Please check your password or verify your email.");
            } else {
                setError(error.message);
            }
        } finally {
            setLoading(false);
        }
    };

    const handleOAuthLogin = async (provider) => {
        setLoading(true);
        setError('');

        try {
            const { data, error } = await supabase.auth.signInWithOAuth({
                provider: provider,
                options: {
                    redirectTo: window.location.origin
                }
            });

            if (error) throw error;
        } catch (error) {
            setError(error.message);
            setLoading(false);
        }
    };

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'rgba(0, 0, 0, 0.8)',
                    backdropFilter: 'blur(8px)',
                    zIndex: 9999,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '20px'
                }}
                onClick={onClose}
            >
                <motion.div
                    initial={{ scale: 0.9, opacity: 0, y: 20 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0.9, opacity: 0, y: 20 }}
                    transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                    onClick={(e) => e.stopPropagation()}
                    style={{
                        background: '#1a1a1a',
                        borderRadius: '24px',
                        padding: '40px',
                        maxWidth: '460px',
                        width: '100%',
                        maxHeight: '90vh',
                        overflowY: 'auto',
                        position: 'relative',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)',
                        margin: 'auto'
                    }}
                >
                    {/* Close Button */}
                    <button
                        onClick={onClose}
                        style={{
                            position: 'absolute',
                            top: '20px',
                            right: '20px',
                            background: 'rgba(255, 255, 255, 0.05)',
                            border: 'none',
                            borderRadius: '8px',
                            padding: '8px',
                            cursor: 'pointer',
                            color: 'var(--text-secondary)',
                            transition: 'all 0.2s'
                        }}
                        onMouseOver={(e) => {
                            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                            e.currentTarget.style.color = 'var(--text-primary)';
                        }}
                        onMouseOut={(e) => {
                            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                            e.currentTarget.style.color = 'var(--text-secondary)';
                        }}
                    >
                        <X size={20} />
                    </button>

                    {/* Status Indicator */}
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        marginBottom: '32px',
                        padding: '8px 16px',
                        background: 'rgba(129, 201, 149, 0.1)',
                        borderRadius: '100px',
                        width: 'fit-content'
                    }}>
                        <motion.div
                            animate={{
                                scale: [1, 1.2, 1],
                                opacity: [1, 0.7, 1]
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity
                            }}
                            style={{
                                width: '8px',
                                height: '8px',
                                borderRadius: '50%',
                                background: '#81c995',
                                boxShadow: '0 0 10px #81c995'
                            }}
                        />
                        <span style={{ fontSize: '0.85rem', color: '#81c995', fontWeight: '500' }}>
                            All systems operational
                        </span>
                    </div>

                    {/* Title */}
                    <h2 style={{
                        fontSize: '2rem',
                        fontWeight: '700',
                        marginBottom: '8px',
                        color: 'var(--text-primary)'
                    }}>
                        {mode === 'signup' ? 'Create Your Account' : 'Welcome Back'}
                    </h2>

                    <p style={{
                        color: 'var(--text-secondary)',
                        marginBottom: '32px',
                        fontSize: '0.95rem'
                    }}>
                        {mode === 'signup' ? 'Already have an account? ' : "Don't have an account? "}
                        <button
                            onClick={() => {
                                setMode(mode === 'signup' ? 'login' : 'signup');
                                setError('');
                                setMessage('');
                            }}
                            style={{
                                background: 'none',
                                border: 'none',
                                color: 'var(--color-primary)',
                                cursor: 'pointer',
                                fontWeight: '600',
                                padding: 0
                            }}
                        >
                            {mode === 'signup' ? 'Log in' : 'Sign up'}
                        </button>
                    </p>

                    {/* OAuth Buttons */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '24px' }}>
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => handleOAuthLogin('google')}
                            disabled={loading}
                            style={{
                                padding: '14px',
                                background: 'rgba(255, 255, 255, 0.05)',
                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                borderRadius: '12px',
                                color: 'var(--text-primary)',
                                fontSize: '0.9rem',
                                fontWeight: '500',
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '8px',
                                transition: 'all 0.2s'
                            }}
                        >
                            <Chrome size={18} />
                            Google
                        </motion.button>

                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => handleOAuthLogin('github')}
                            disabled={loading}
                            style={{
                                padding: '14px',
                                background: 'rgba(255, 255, 255, 0.05)',
                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                borderRadius: '12px',
                                color: 'var(--text-primary)',
                                fontSize: '0.9rem',
                                fontWeight: '500',
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '8px',
                                transition: 'all 0.2s'
                            }}
                        >
                            <Github size={18} />
                            GitHub
                        </motion.button>
                    </div>

                    {/* Divider */}
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '16px',
                        marginBottom: '24px'
                    }}>
                        <div style={{ flex: 1, height: '1px', background: 'rgba(255, 255, 255, 0.1)' }} />
                        <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>or</span>
                        <div style={{ flex: 1, height: '1px', background: 'rgba(255, 255, 255, 0.1)' }} />
                    </div>

                    {/* Form */}
                    <form onSubmit={handleEmailAuth}>
                        {mode === 'signup' && (
                            <div style={{ marginBottom: '16px' }}>
                                <label style={{
                                    display: 'block',
                                    marginBottom: '8px',
                                    color: 'var(--text-secondary)',
                                    fontSize: '0.9rem',
                                    fontWeight: '500'
                                }}>
                                    Full Name
                                </label>
                                <div style={{ position: 'relative' }}>
                                    <User
                                        size={18}
                                        style={{
                                            position: 'absolute',
                                            left: '16px',
                                            top: '50%',
                                            transform: 'translateY(-50%)',
                                            color: 'var(--text-muted)'
                                        }}
                                    />
                                    <input
                                        type="text"
                                        value={fullName}
                                        onChange={(e) => setFullName(e.target.value)}
                                        required
                                        placeholder="John Doe"
                                        style={{
                                            width: '100%',
                                            padding: '14px 16px 14px 48px',
                                            background: 'rgba(255, 255, 255, 0.05)',
                                            border: '1px solid rgba(255, 255, 255, 0.1)',
                                            borderRadius: '12px',
                                            color: 'var(--text-primary)',
                                            fontSize: '0.95rem',
                                            outline: 'none',
                                            transition: 'all 0.2s'
                                        }}
                                        onFocus={(e) => {
                                            e.target.style.background = 'rgba(255, 255, 255, 0.08)';
                                            e.target.style.borderColor = 'var(--color-primary)';
                                        }}
                                        onBlur={(e) => {
                                            e.target.style.background = 'rgba(255, 255, 255, 0.05)';
                                            e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                                        }}
                                    />
                                </div>
                            </div>
                        )}

                        <div style={{ marginBottom: '16px' }}>
                            <label style={{
                                display: 'block',
                                marginBottom: '8px',
                                color: 'var(--text-secondary)',
                                fontSize: '0.9rem',
                                fontWeight: '500'
                            }}>
                                Email
                            </label>
                            <div style={{ position: 'relative' }}>
                                <Mail
                                    size={18}
                                    style={{
                                        position: 'absolute',
                                        left: '16px',
                                        top: '50%',
                                        transform: 'translateY(-50%)',
                                        color: 'var(--text-muted)'
                                    }}
                                />
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    placeholder="alan.turing@example.com"
                                    style={{
                                        width: '100%',
                                        padding: '14px 16px 14px 48px',
                                        background: 'rgba(255, 255, 255, 0.05)',
                                        border: '1px solid rgba(255, 255, 255, 0.1)',
                                        borderRadius: '12px',
                                        color: 'var(--text-primary)',
                                        fontSize: '0.95rem',
                                        outline: 'none',
                                        transition: 'all 0.2s'
                                    }}
                                    onFocus={(e) => {
                                        e.target.style.background = 'rgba(255, 255, 255, 0.08)';
                                        e.target.style.borderColor = 'var(--color-primary)';
                                    }}
                                    onBlur={(e) => {
                                        e.target.style.background = 'rgba(255, 255, 255, 0.05)';
                                        e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                                    }}
                                />
                            </div>
                        </div>

                        <div style={{ marginBottom: '24px' }}>
                            <label style={{
                                display: 'block',
                                marginBottom: '8px',
                                color: 'var(--text-secondary)',
                                fontSize: '0.9rem',
                                fontWeight: '500'
                            }}>
                                Password
                            </label>
                            <div style={{ position: 'relative' }}>
                                <Lock
                                    size={18}
                                    style={{
                                        position: 'absolute',
                                        left: '16px',
                                        top: '50%',
                                        transform: 'translateY(-50%)',
                                        color: 'var(--text-muted)'
                                    }}
                                />
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                    minLength={6}
                                    placeholder="••••••••••"
                                    style={{
                                        width: '100%',
                                        padding: '14px 48px 14px 48px',
                                        background: 'rgba(255, 255, 255, 0.05)',
                                        border: '1px solid rgba(255, 255, 255, 0.1)',
                                        borderRadius: '12px',
                                        color: 'var(--text-primary)',
                                        fontSize: '0.95rem',
                                        outline: 'none',
                                        transition: 'all 0.2s'
                                    }}
                                    onFocus={(e) => {
                                        e.target.style.background = 'rgba(255, 255, 255, 0.08)';
                                        e.target.style.borderColor = 'var(--color-primary)';
                                    }}
                                    onBlur={(e) => {
                                        e.target.style.background = 'rgba(255, 255, 255, 0.05)';
                                        e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                                    }}
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    style={{
                                        position: 'absolute',
                                        right: '16px',
                                        top: '50%',
                                        transform: 'translateY(-50%)',
                                        background: 'none',
                                        border: 'none',
                                        cursor: 'pointer',
                                        color: 'var(--text-muted)',
                                        padding: 0
                                    }}
                                >
                                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                </button>
                            </div>
                        </div>

                        {/* Error/Success Messages */}
                        {error && (
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                style={{
                                    padding: '12px 16px',
                                    background: 'rgba(255, 107, 107, 0.1)',
                                    border: '1px solid rgba(255, 107, 107, 0.3)',
                                    borderRadius: '8px',
                                    color: '#ff6b6b',
                                    fontSize: '0.85rem',
                                    marginBottom: '16px'
                                }}
                            >
                                {error}
                            </motion.div>
                        )}

                        {message && (
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                style={{
                                    padding: '12px 16px',
                                    background: 'rgba(129, 201, 149, 0.1)',
                                    border: '1px solid rgba(129, 201, 149, 0.3)',
                                    borderRadius: '8px',
                                    color: '#81c995',
                                    fontSize: '0.85rem',
                                    marginBottom: '16px'
                                }}
                            >
                                {message}
                            </motion.div>
                        )}

                        {/* Submit Button */}
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            type="submit"
                            disabled={loading}
                            style={{
                                width: '100%',
                                padding: '16px',
                                background: loading ? 'rgba(138, 180, 248, 0.5)' : 'linear-gradient(135deg, #8ab4f8 0%, #6fa0e8 100%)',
                                border: 'none',
                                borderRadius: '12px',
                                color: '#000',
                                fontSize: '1rem',
                                fontWeight: '600',
                                cursor: loading ? 'not-allowed' : 'pointer',
                                boxShadow: '0 8px 24px rgba(138, 180, 248, 0.3)',
                                transition: 'all 0.2s'
                            }}
                        >
                            {loading ? 'Please wait...' : (mode === 'signup' ? 'Create Account' : 'Log In')}
                        </motion.button>
                    </form>

                    {/* Terms */}
                    <p style={{
                        marginTop: '24px',
                        fontSize: '0.8rem',
                        color: 'var(--text-muted)',
                        textAlign: 'center',
                        lineHeight: '1.5'
                    }}>
                        By {mode === 'signup' ? 'signing up' : 'logging in'}, you agree to our{' '}
                        <a href="/terms-of-service" style={{ color: 'var(--color-primary)' }}>Terms</a>,{' '}
                        <a href="/privacy-policy" style={{ color: 'var(--color-primary)' }}>Privacy Policy</a>
                    </p>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

export default AuthModal;
