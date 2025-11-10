import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'your-button-component';
import { ShoppingCart, Menu, X } from 'your-icon-library';
import { createPageUrl } from 'your-url-utility';

const Navigation = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header className="relative">
            <nav className="desktop-navigation">
                <ul className="flex space-x-4">
                    <li><Link to={createPageUrl('home')}>Home</Link></li>
                    <li><Link to={createPageUrl('features')}>Features</Link></li>
                    <li><Link to={createPageUrl('pricing')}>Pricing</Link></li>
                    <li><Link to={createPageUrl('faqs')}>FAQs</Link></li>
                    <li><Link to={createPageUrl('about')}>About</Link></li>
                </ul>
                <Button>Get Started</Button>
            </nav>
            <div className="md:hidden">
                <button onClick={toggleMobileMenu} aria-label="Toggle menu">
                    {isMobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>
            {isMobileMenuOpen && (
                <div className="fixed top-0 right-0 h-full w-3/4 max-w-sm bg-white opacity-100 shadow-2xl z-50 md:hidden transform transition-transform duration-300 ease-in-out">
                    <nav>
                        <ul className="flex flex-col space-y-4 p-4">
                            <li><Link to={createPageUrl('home')} onClick={toggleMobileMenu}>Home</Link></li>
                            <li><Link to={createPageUrl('features')} onClick={toggleMobileMenu}>Features</Link></li>
                            <li><Link to={createPageUrl('pricing')} onClick={toggleMobileMenu}>Pricing</Link></li>
                            <li><Link to={createPageUrl('faqs')} onClick={toggleMobileMenu}>FAQs</Link></li>
                            <li><Link to={createPageUrl('about')} onClick={toggleMobileMenu}>About</Link></li>
                        </ul>
                        <div className="p-4">
                            <Button onClick={toggleMobileMenu}>Get Started</Button>
                        </div>
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Navigation;