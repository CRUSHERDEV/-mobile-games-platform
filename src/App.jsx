import React, { Suspense, lazy, useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Welcome from './pages/Welcome';
import { supabase } from './supabaseClient';

// Lazy load pages
const Home = lazy(() => import('./pages/Home'));
const Review = lazy(() => import('./pages/Review'));
const Categories = lazy(() => import('./pages/Categories'));
const News = lazy(() => import('./pages/News'));
const Article = lazy(() => import('./pages/Article'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Privacy = lazy(() => import('./pages/Privacy'));
const Terms = lazy(() => import('./pages/Terms'));

// Loading fallback
const Loading = () => (
  <div style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    background: '#000',
    color: 'var(--color-primary)'
  }}>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
      <div style={{
        width: '40px',
        height: '40px',
        border: '3px solid rgba(138, 180, 248, 0.3)',
        borderTopColor: '#8ab4f8',
        borderRadius: '50%',
        animation: 'spin 1s linear infinite'
      }} />
      <style>{`@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }`}</style>
    </div>
  </div>
);

const App = () => {
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check active session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setLoading(false);
    });

    // Listen for auth changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      setLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Layout user={session?.user}><Home /></Layout>} />
          <Route path="/review/:id" element={<Layout user={session?.user}><Review /></Layout>} />
          <Route path="/categories" element={<Layout user={session?.user}><Categories /></Layout>} />
          <Route path="/news" element={<Layout user={session?.user}><News /></Layout>} />
          <Route path="/news/:id" element={<Layout user={session?.user}><Article /></Layout>} />
          <Route path="/about-us" element={<Layout user={session?.user}><About /></Layout>} />
          <Route path="/contact" element={<Layout user={session?.user}><Contact /></Layout>} />
          <Route path="/privacy-policy" element={<Layout user={session?.user}><Privacy /></Layout>} />
          <Route path="/terms-of-service" element={<Layout user={session?.user}><Terms /></Layout>} />

          {/* Fallback */}
          <Route path="*" element={<Layout user={session?.user}><Home /></Layout>} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
