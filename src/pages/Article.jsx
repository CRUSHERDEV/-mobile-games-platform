import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowLeft } from 'lucide-react';
import { getArticleById } from '../data/articles';
import { trackArticleView } from '../utils/analytics';
import { useEngagementTracking } from '../utils/usePageTracking';

const Article = () => {
    const { id } = useParams();
    const article = getArticleById(id);

    // Track engagement time on this article
    useEngagementTracking(`article-${id}`);

    // Track article view
    useEffect(() => {
        if (article) {
            trackArticleView(article.id, article.title, article.category);
        }
    }, [article]);

    if (!article) {
        return (
            <div className="container" style={{ paddingTop: '120px', paddingBottom: '80px', textAlign: 'center' }}>
                <h1>Article Not Found</h1>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
                    The article you're looking for doesn't exist.
                </p>
                <Link to="/news" className="btn btn-primary">
                    Back to News
                </Link>
            </div>
        );
    }

    // Convert markdown-style content to JSX
    const renderContent = (content) => {
        return content.split('\n\n').map((paragraph, index) => {
            // Handle headings
            if (paragraph.startsWith('###')) {
                return (
                    <h3 key={index} style={{ fontSize: '1.5rem', fontWeight: '700', marginTop: '2rem', marginBottom: '1rem' }}>
                        {paragraph.replace('###', '').trim()}
                    </h3>
                );
            }
            if (paragraph.startsWith('##')) {
                return (
                    <h2 key={index} style={{ fontSize: '2rem', fontWeight: '700', marginTop: '2.5rem', marginBottom: '1rem' }}>
                        {paragraph.replace('##', '').trim()}
                    </h2>
                );
            }

            // Handle bold text
            if (paragraph.includes('**')) {
                const parts = paragraph.split('**');
                return (
                    <p key={index} style={{ marginBottom: '1.5rem', lineHeight: '1.8', color: 'var(--text-secondary)' }}>
                        {parts.map((part, i) =>
                            i % 2 === 1 ? <strong key={i} style={{ color: 'var(--text-primary)' }}>{part}</strong> : part
                        )}
                    </p>
                );
            }

            // Regular paragraph
            return paragraph.trim() ? (
                <p key={index} style={{ marginBottom: '1.5rem', lineHeight: '1.8', color: 'var(--text-secondary)' }}>
                    {paragraph.trim()}
                </p>
            ) : null;
        });
    };

    return (
        <div className="container" style={{ paddingTop: '120px', paddingBottom: '80px' }}>
            <Helmet>
                <title>{article.title} - GameFlex</title>
                <meta name="description" content={article.excerpt} />
            </Helmet>

            {/* Back Button */}
            <Link
                to="/news"
                style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    color: 'var(--text-secondary)',
                    marginBottom: '2rem',
                    transition: 'color 0.2s'
                }}
                onMouseOver={(e) => e.currentTarget.style.color = 'var(--text-primary)'}
                onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
            >
                <ArrowLeft size={16} /> Back to News
            </Link>

            <motion.article
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                style={{ maxWidth: '800px', margin: '0 auto' }}
            >
                {/* Category Badge */}
                <div style={{
                    display: 'inline-block',
                    background: 'var(--color-primary)',
                    color: '#000',
                    padding: '0.5rem 1rem',
                    borderRadius: '20px',
                    fontSize: '0.85rem',
                    fontWeight: '600',
                    marginBottom: '1rem'
                }}>
                    {article.category}
                </div>

                {/* Title */}
                <h1 style={{ fontSize: '3rem', fontWeight: '700', marginBottom: '1.5rem', lineHeight: '1.2' }}>
                    {article.title}
                </h1>

                {/* Meta Info */}
                <div style={{ display: 'flex', gap: '1.5rem', fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '2rem' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <Calendar size={16} /> {article.date}
                    </span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <User size={16} /> {article.author}
                    </span>
                </div>

                {/* Featured Image */}
                <div style={{
                    width: '100%',
                    height: '400px',
                    overflow: 'hidden',
                    borderRadius: 'var(--radius-md)',
                    marginBottom: '3rem'
                }}>
                    <img
                        src={article.image}
                        alt={article.title}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                </div>

                {/* Excerpt */}
                <p style={{
                    fontSize: '1.25rem',
                    fontWeight: '500',
                    color: 'var(--text-primary)',
                    marginBottom: '2rem',
                    paddingLeft: '1.5rem',
                    borderLeft: '4px solid var(--color-primary)'
                }}>
                    {article.excerpt}
                </p>

                {/* Article Content */}
                <div className="article-content">
                    {renderContent(article.content)}
                </div>

                {/* Share Section */}
                <div style={{
                    marginTop: '4rem',
                    paddingTop: '2rem',
                    borderTop: '1px solid var(--bg-primary)'
                }}>
                    <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>
                        Enjoyed this article? Share it with your gaming friends!
                    </p>
                </div>

                {/* Related Articles */}
                <div style={{ marginTop: '4rem' }}>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '2rem' }}>
                        More Articles
                    </h3>
                    <Link
                        to="/news"
                        className="btn btn-outline"
                    >
                        View All Articles
                    </Link>
                </div>
            </motion.article>
        </div>
    );
};

export default Article;
