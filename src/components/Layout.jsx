import React from 'react';
import Header from './Header';
import Footer from './Footer';
import CookieConsent from './CookieConsent';

const Layout = ({ children, user }) => {
    return (
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Header user={user} />
            <main style={{ flex: 1 }}>
                {children}
            </main>
            <Footer />
            <CookieConsent />
        </div>
    );
};

export default Layout;
