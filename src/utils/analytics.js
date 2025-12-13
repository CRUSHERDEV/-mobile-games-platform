/**
 * Google Analytics Utility for GameFlex
 * Track custom events, page views, and user interactions
 */

// Check if gtag is available
const isGtagAvailable = () => {
    return typeof window !== 'undefined' && typeof window.gtag === 'function';
};

/**
 * Track page views
 * @param {string} url - Page URL
 * @param {string} title - Page title
 */
export const trackPageView = (url, title) => {
    if (!isGtagAvailable()) return;

    window.gtag('config', 'G-RKJ8DVXM86', {
        page_path: url,
        page_title: title
    });

    console.log('📊 GA: Page view tracked:', { url, title });
};

/**
 * Track custom events
 * @param {string} action - Event action (e.g., 'click', 'purchase', 'download')
 * @param {object} params - Event parameters
 */
export const trackEvent = (action, params = {}) => {
    if (!isGtagAvailable()) return;

    window.gtag('event', action, params);
    console.log('📊 GA: Event tracked:', action, params);
};

/**
 * Track article views
 * @param {string} articleId - Article ID
 * @param {string} articleTitle - Article title
 * @param {string} category - Article category
 */
export const trackArticleView = (articleId, articleTitle, category) => {
    trackEvent('view_article', {
        article_id: articleId,
        article_title: articleTitle,
        article_category: category,
        content_type: 'article'
    });
};

/**
 * Track game reviews
 * @param {string} gameId - Game ID
 * @param {string} gameTitle - Game title
 */
export const trackGameReview = (gameId, gameTitle) => {
    trackEvent('view_game_review', {
        game_id: gameId,
        game_title: gameTitle,
        content_type: 'game_review'
    });
};

/**
 * Track affiliate link clicks
 * @param {string} gameTitle - Game that was clicked
 * @param {string} platform - Gaming platform/store
 * @param {string} linkType - Type of link (e.g., 'download', 'purchase', 'info')
 */
export const trackAffiliateClick = (gameTitle, platform, linkType = 'click') => {
    trackEvent('affiliate_click', {
        game_title: gameTitle,
        platform: platform,
        link_type: linkType,
        event_category: 'engagement',
        event_label: 'affiliate_link'
    });
};

/**
 * Track search
 * @param {string} searchTerm - What the user searched for
 */
export const trackSearch = (searchTerm) => {
    trackEvent('search', {
        search_term: searchTerm,
        event_category: 'engagement'
    });
};

/**
 * Track category filter
 * @param {string} category - Selected category
 */
export const trackCategoryFilter = (category) => {
    trackEvent('filter_category', {
        category: category,
        event_category: 'navigation'
    });
};

/**
 * Track newsletter signup
 * @param {string} source - Where the signup came from
 */
export const trackNewsletterSignup = (source = 'footer') => {
    trackEvent('newsletter_signup', {
        source: source,
        event_category: 'conversion',
        value: 1
    });
};

/**
 * Track social share
 * @param {string} platform - Social platform (twitter, facebook, etc.)
 * @param {string} contentType - What was shared (article, game, etc.)
 * @param {string} contentId - ID of shared content
 */
export const trackSocialShare = (platform, contentType, contentId) => {
    trackEvent('share', {
        method: platform,
        content_type: contentType,
        content_id: contentId,
        event_category: 'engagement'
    });
};

/**
 * Track user engagement time
 * @param {number} seconds - Time spent on page
 * @param {string} page - Page identifier
 */
export const trackEngagementTime = (seconds, page) => {
    if (seconds < 5) return; // Ignore very short visits

    trackEvent('engagement_time', {
        value: seconds,
        page: page,
        event_category: 'engagement'
    });
};

/**
 * Track outbound link clicks
 * @param {string} url - Destination URL
 * @param {string} linkText - Link text/description
 */
export const trackOutboundLink = (url, linkText) => {
    trackEvent('click_outbound', {
        link_url: url,
        link_text: linkText,
        event_category: 'engagement'
    });
};

/**
 * Track form submissions
 * @param {string} formName - Name/ID of the form
 * @param {boolean} success - Whether submission was successful
 */
export const trackFormSubmit = (formName, success = true) => {
    trackEvent('form_submit', {
        form_name: formName,
        success: success,
        event_category: 'conversion'
    });
};

/**
 * Track errors
 * @param {string} errorMessage - Error message
 * @param {string} errorLocation - Where the error occurred
 */
export const trackError = (errorMessage, errorLocation) => {
    trackEvent('exception', {
        description: errorMessage,
        location: errorLocation,
        fatal: false
    });
};

/**
 * Set user properties
 * @param {object} properties - User properties to set
 */
export const setUserProperties = (properties) => {
    if (!isGtagAvailable()) return;

    window.gtag('set', 'user_properties', properties);
    console.log('📊 GA: User properties set:', properties);
};

/**
 * Track conversion (for Google Ads)
 * @param {string} conversionId - Conversion ID
 * @param {object} params - Conversion parameters
 */
export const trackConversion = (conversionId, params = {}) => {
    if (!isGtagAvailable()) return;

    window.gtag('event', 'conversion', {
        send_to: conversionId,
        ...params
    });

    console.log('📊 GA: Conversion tracked:', conversionId, params);
};

// Export all analytics functions
export default {
    trackPageView,
    trackEvent,
    trackArticleView,
    trackGameReview,
    trackAffiliateClick,
    trackSearch,
    trackCategoryFilter,
    trackNewsletterSignup,
    trackSocialShare,
    trackEngagementTime,
    trackOutboundLink,
    trackFormSubmit,
    trackError,
    setUserProperties,
    trackConversion
};
