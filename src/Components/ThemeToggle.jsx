import { useEffect, useState } from 'react';
import { FiMoon, FiSun } from 'react-icons/fi';

export default function ThemeToggle() {
    const [theme, setTheme] = useState(() =>
        localStorage.getItem('theme') ||
        (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
    );
    const isDark = theme === 'dark';
    // Apply theme to <html> whenever state changes
    useEffect(() => {
        const root = document.documentElement;
        root.setAttribute('data-theme', theme);          // DaisyUI tokens
        root.classList.toggle('dark', theme === 'dark'); // Tailwind `dark:` utilities
        localStorage.setItem('theme', theme);
    }, [theme]);

    // Follow OS changes only if the user hasn't set a manual choice
    useEffect(() => {
        if (localStorage.getItem('theme')) return;
        const mq = window.matchMedia('(prefers-color-scheme: dark)');
        const onChange = (e) => setTheme(e.matches ? 'dark' : 'light');
        mq.addEventListener('change', onChange);
        return () => mq.removeEventListener('change', onChange);
    }, []);
    const toggle = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'));

    return (
        <button
            type="button"
            aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
            onClick={toggle}
            className="btn btn-ghost btn-circle text-base-content"
        >
            {isDark ? (
                <FiMoon size={18} className="transition-transform duration-200" />
            ) : (
                <FiSun size={18} className="transition-transform duration-200" />
            )}
        </button>
    );
}
