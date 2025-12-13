import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { supabase } from '../supabaseClient';
import AuthModal from './AuthModal';
import UserMenu from './UserMenu';

const Header = ({ user }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authMode, setAuthMode] = useState('login');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    // App.jsx will handle the redirect/state change
  };

  const openAuthModal = (mode = 'login') => {
    setAuthMode(mode);
    setShowAuthModal(true);
  };

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          transition: 'all 0.3s ease',
          padding: isScrolled ? '12px 0' : '24px 0',
          background: isScrolled ? 'rgba(0, 0, 0, 0.8)' : 'transparent',
          backdropFilter: isScrolled ? 'blur(12px)' : 'none',
          boxShadow: isScrolled ? 'var(--shadow-sm)' : 'none'
        }}
      >
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
          padding: '0 50px',
          margin: '0 auto'
        }}>
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span className="text-2xl font-bold tracking-tighter" style={{ fontSize: '1.8rem', fontWeight: '700', letterSpacing: '0.02em', color: 'var(--text-primary)', fontFamily: 'var(--font-heading)', textTransform: 'uppercase' }}>
              GameFlex
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="desktop-only items-center gap-8" style={{ gap: '2.5rem' }}>
            <Link
              to="/"
              className="text-sm font-medium transition-colors"
              style={{ fontSize: '0.95rem', fontWeight: '500', color: 'var(--text-secondary)', transition: 'var(--transition-standard)' }}
              onMouseOver={(e) => e.currentTarget.style.color = 'var(--text-primary)'}
              onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
            >
              Home
            </Link>
            <Link
              to="/categories"
              className="text-sm font-medium transition-colors"
              style={{ fontSize: '0.95rem', fontWeight: '500', color: 'var(--text-secondary)', transition: 'var(--transition-standard)' }}
              onMouseOver={(e) => e.currentTarget.style.color = 'var(--text-primary)'}
              onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
            >
              Categories
            </Link>
            <Link
              to="/news"
              className="text-sm font-medium transition-colors"
              style={{ fontSize: '0.95rem', fontWeight: '500', color: 'var(--text-secondary)', transition: 'var(--transition-standard)' }}
              onMouseOver={(e) => e.currentTarget.style.color = 'var(--text-primary)'}
              onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
            >
              News
            </Link>
          </nav>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-4" style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            {user && (
              <UserMenu user={user} onLogout={handleLogout} />
            )}

            <button
              className="mobile-only text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              style={{ color: 'var(--text-primary)' }}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              style={{
                position: 'absolute',
                top: '100%',
                left: 0,
                right: 0,
                background: 'var(--bg-surface)',
                padding: '1.5rem',
                boxShadow: 'var(--shadow-md)'
              }}
            >
              <nav className="flex flex-col gap-4" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <Link
                  to="/"
                  className="text-lg font-medium"
                  style={{ color: 'var(--text-primary)' }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  to="/categories"
                  className="text-lg font-medium"
                  style={{ color: 'var(--text-primary)' }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Categories
                </Link>
                <Link
                  to="/news"
                  className="text-lg font-medium"
                  style={{ color: 'var(--text-primary)' }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  News
                </Link>
                {user && (
                  <button
                    className="btn btn-outline w-full"
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      handleLogout();
                    }}
                    style={{
                      width: '100%',
                      color: '#ff6b6b',
                      borderColor: '#ff6b6b'
                    }}
                  >
                    Log Out
                  </button>
                )}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Auth Modal */}
      <AuthModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
        initialMode={authMode}
      />
    </>
  );
};

export default Header;
