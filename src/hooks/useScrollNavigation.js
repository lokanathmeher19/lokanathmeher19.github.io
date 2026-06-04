import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const useScrollNavigation = (nextPath, prevPath) => {
    const navigate = useNavigate();
    const isNavigating = useRef(false);
    const scrollAcc = useRef(0);

    useEffect(() => {
        const handleWheel = (e) => {
            // Only handle vertical scroll
            if (Math.abs(e.deltaY) < Math.abs(e.deltaX)) return;
            
            if (isNavigating.current) return;

            const scrollTop = window.scrollY;
            const windowHeight = window.innerHeight;
            const docHeight = document.documentElement.scrollHeight;
            const threshold = 15; // Increased threshold for stability

            // Check if at extreme bounds
            const atBottom = scrollTop + windowHeight >= docHeight - threshold;
            const atTop = scrollTop <= threshold;

            if (atBottom && nextPath && e.deltaY > 20) {
                // Accumulated scroll to prevent accidental triggers
                scrollAcc.current += e.deltaY;
                if (scrollAcc.current > 150) {
                    isNavigating.current = true;
                    scrollAcc.current = 0;
                    navigate(nextPath);
                    setTimeout(() => { isNavigating.current = false; }, 1200);
                }
            } else if (atTop && prevPath && e.deltaY < -20) {
                scrollAcc.current += e.deltaY;
                if (scrollAcc.current < -150) {
                    isNavigating.current = true;
                    scrollAcc.current = 0;
                    navigate(prevPath);
                    setTimeout(() => { isNavigating.current = false; }, 1200);
                }
            } else {
                scrollAcc.current = 0;
            }
        };

        window.addEventListener('wheel', handleWheel, { passive: true });
        return () => window.removeEventListener('wheel', handleWheel);
    }, [navigate, nextPath, prevPath]);
};

export default useScrollNavigation;
