import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MenuButton from './MenuButton';
import SideMenu from '../SideMenu';


function Header() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };
    const [isSticky, setIsSticky] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 150) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <>
            <header className={`rts-header style-one header__default ${isSticky ? 'header-sticky' : ''}`}>
                {/* HEADER TOP AREA */}
                <div className="rts-ht rts-ht__bg">
                    <div className="container">
                        <div className="row">
                            <div className="rts-ht__wrapper">
                                <div className="rts-ht__email">
                                    <Link to="mailto:info@hostie.com">
                                        <img src="/assets/images/icon/email.svg" alt="" className="icon" />
                                        contact@hostie.com
                                    </Link>
                                </div>
                                <div className="rts-ht__promo">
                                    <p>
                                        <img
                                            className="icon"
                                            src="/assets/images/icon/tag--group.svg"
                                            alt=""
                                        />{" "}
                                        Hosting Flash Sale: Starting at <strong>$2.59/mo</strong> for a
                                        limited time
                                    </p>
                                </div>
                                <div className="rts-ht__links">
                                    <div className="live-chat-has-dropdown">
                                        <Link to="/support" className="live__chat">
                                            <img
                                                src="/assets/images/icon/forum.svg"
                                                alt=""
                                                className="icon"
                                            />
                                            Live Chat
                                        </Link>
                                    </div>
                                    <div className="login-btn-has-dropdown">
                                        <Link to="#" className="login__link">
                                            <img
                                                src="/assets/images/icon/person.svg"
                                                alt=""
                                                className="icon"
                                            />
                                            Login
                                        </Link>
                                        <div className="login-submenu">
                                            <form action="#">
                                                <div className="form-inner">
                                                    <div className="single-wrapper">
                                                        <input
                                                            type="email"
                                                            placeholder="Your email"
                                                            required
                                                        />
                                                    </div>
                                                    <div className="single-wrapper">
                                                        <input
                                                            type="password"
                                                            placeholder="Password"
                                                            required
                                                        />
                                                    </div>
                                                    <div className="form-btn">
                                                        <button type="submit" className="primary__btn">
                                                            Log In
                                                        </button>
                                                    </div>
                                                    <Link to="#" className="forgot-password">
                                                        Forgot your password?
                                                    </Link>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* HEADER TOP AREA END */}
                <div className="container">
                    <div className="row">
                        <div className="rts-header__wrapper">
                            {/* FOR LOGO */}
                            <div className="rts-header__logo">
                                <Link to="/" className="site-logo">
                                    <img
                                        className="logo-white"
                                        src="/assets/images/logo/logo-1.svg"
                                        alt="Hostie"
                                    />
                                    <img
                                        className="logo-dark"
                                        src="/assets/images/logo/logo-4.svg"
                                        alt="Hostie"
                                    />
                                </Link>
                            </div>
                            {/* FOR NAVIGATION MENU */}
                            <nav className="rts-header__menu" id="mobile-menu">
                                <div className="hostie-menu">
                              
                                </div>
                            </nav>
                            {/* FOR HEADER RIGHT */}
                            <MenuButton toggleSidebar={toggleSidebar} />
                        </div>
                    </div>
                </div>
            </header>
            <SideMenu isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

        </>
    )
}

export default Header