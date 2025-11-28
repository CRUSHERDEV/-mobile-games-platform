import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, LogOut, Settings, Trophy, Star } from 'lucide-react';
import { supabase } from '../supabaseClient';

const UserMenu = ({ user, onLogout }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div style={{ position: 'relative' }}>
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    padding: '8px 16px',
                    background: 'rgba(138, 180, 248, 0.1)',
                    border: '1px solid rgba(138, 180, 248, 0.3)',
                    borderRadius: '100px',
                    color: 'var(--text-primary)',
                    cursor: 'pointer',
                    transition: 'all 0.2s'
                }}
            >
                <div style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #8ab4f8, #81c995)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: '600',
                    fontSize: '0.9rem'
                }}>
                    {user?.user_metadata?.full_name?.[0]?.toUpperCase() || user?.email?.[0]?.toUpperCase() || 'U'}
                </div>
                <span style={{ fontSize: '0.9rem', fontWeight: '500' }}>
                    {user?.user_metadata?.full_name || user?.email?.split('@')[0] || 'User'}
                </span>
            </motion.button>

            <AnimatePresence>
                {isOpen && (
                    <>
                        <div
                            style={{
                                position: 'fixed',
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                zIndex: 998
                            }}
                            onClick={() => setIsOpen(false)}
                        />
                        <motion.div
                            initial={{ opacity: 0, y: -10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -10, scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                            style={{
                                position: 'absolute',
                                top: 'calc(100% + 10px)',
                                right: 0,
                                background: '#1a1a1a',
                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                borderRadius: '16px',
                                padding: '12px',
                                minWidth: '220px',
                                boxShadow: '0 10px 40px rgba(0, 0, 0, 0.5)',
                                zIndex: 999
                            }}
                        >
                            {/* User Info */}
                            <div style={{
                                padding: '12px',
                                borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                                marginBottom: '8px'
                            }}>
                                <div style={{
                                    fontSize: '0.95rem',
                                    fontWeight: '600',
                                    color: 'var(--text-primary)',
                                    marginBottom: '4px'
                                }}>
                                    {user?.user_metadata?.full_name || 'User'}
                                </div>
                                <div style={{
                                    fontSize: '0.8rem',
                                    color: 'var(--text-muted)'
                                }}>
                                    {user?.email}
                                </div>
                            </div>

                            {/* Menu Items */}
                            <button
                                onClick={() => {
                                    setIsOpen(false);
                                    // Navigate to profile
                                }}
                                style={{
                                    width: '100%',
                                    padding: '10px 12px',
                                    background: 'none',
                                    border: 'none',
                                    borderRadius: '8px',
                                    color: 'var(--text-secondary)',
                                    cursor: 'pointer',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '10px',
                                    fontSize: '0.9rem',
                                    transition: 'all 0.2s',
                                    textAlign: 'left'
                                }}
                                onMouseOver={(e) => {
                                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                                    e.currentTarget.style.color = 'var(--text-primary)';
                                }}
                                onMouseOut={(e) => {
                                    e.currentTarget.style.background = 'none';
                                    e.currentTarget.style.color = 'var(--text-secondary)';
                                }}
                            >
                                <User size={16} />
                                Profile
                            </button>

                            <button
                                onClick={() => {
                                    setIsOpen(false);
                                    // Navigate to achievements
                                }}
                                style={{
                                    width: '100%',
                                    padding: '10px 12px',
                                    background: 'none',
                                    border: 'none',
                                    borderRadius: '8px',
                                    color: 'var(--text-secondary)',
                                    cursor: 'pointer',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '10px',
                                    fontSize: '0.9rem',
                                    transition: 'all 0.2s',
                                    textAlign: 'left'
                                }}
                                onMouseOver={(e) => {
                                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                                    e.currentTarget.style.color = 'var(--text-primary)';
                                }}
                                onMouseOut={(e) => {
                                    e.currentTarget.style.background = 'none';
                                    e.currentTarget.style.color = 'var(--text-secondary)';
                                }}
                            >
                                <Trophy size={16} />
                                Achievements
                            </button>

                            <div style={{
                                height: '1px',
                                background: 'rgba(255, 255, 255, 0.1)',
                                margin: '8px 0'
                            }} />

                            <button
                                onClick={() => {
                                    setIsOpen(false);
                                    onLogout();
                                }}
                                style={{
                                    width: '100%',
                                    padding: '10px 12px',
                                    background: 'none',
                                    border: 'none',
                                    borderRadius: '8px',
                                    color: '#ff6b6b',
                                    cursor: 'pointer',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '10px',
                                    fontSize: '0.9rem',
                                    transition: 'all 0.2s',
                                    textAlign: 'left'
                                }}
                                onMouseOver={(e) => {
                                    e.currentTarget.style.background = 'rgba(255, 107, 107, 0.1)';
                                }}
                                onMouseOut={(e) => {
                                    e.currentTarget.style.background = 'none';
                                }}
                            >
                                <LogOut size={16} />
                                Log Out
                            </button>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
};

export default UserMenu;
