import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { trackPageView } from './analytics';

/**
 * Custom hook to track page views automatically
 * Use this in your main App component
 */
export const usePageTracking = () => {
    const location = useLocation();

    useEffect(() => {
        // Track page view whenever route changes
        const pagePath = location.pathname + location.search;
        const pageTitle = document.title;

        trackPageView(pagePath, pageTitle);
    }, [location]);
};

/**
 * Custom hook to track time spent on page
 * @param {string} pageName - Name of the page
 */
export const useEngagementTracking = (pageName) => {
    useEffect(() => {
        const startTime = Date.now();

        return () => {
            const endTime = Date.now();
            const timeSpent = Math.floor((endTime - startTime) / 1000); // Convert to seconds

            if (timeSpent >= 5) { // Only track if user spent at least 5 seconds
                const { trackEngagementTime } = require('./analytics');
                trackEngagementTime(timeSpent, pageName);
            }
        };
    }, [pageName]);
};

export default usePageTracking;
