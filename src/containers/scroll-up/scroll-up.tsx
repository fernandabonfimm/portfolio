'use client'

import React, { useState, useEffect, use } from 'react';
import { ArrowUp } from 'lucide-react';

function ScrollUp() {
    const [visible, setVisible] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 300) {
            setVisible(true);
        } else {
            setVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <button
            onClick={scrollToTop}
            aria-hidden={!visible}
            className="z-50 transition-all aria-hidden:opacity-0 opacity-100 fixed bottom-6 right-6 bg-laranja text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg "
            aria-label="Scroll to top"
        >
            <ArrowUp size={24} />
        </button>
    );
};

export default ScrollUp;
