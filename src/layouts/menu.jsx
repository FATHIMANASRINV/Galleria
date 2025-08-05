import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
    const [openMenus, setOpenMenus] = useState({});

    const toggleMenu = (menuKey) => {
        setOpenMenus(prev => ({
            ...prev,
            [menuKey]: !prev[menuKey]
        }));
    };

    const isOpen = (key) => openMenus[key];
    return (
        <nav className="pc-sidebar">
            <div className="navbar-wrapper">
                <div className="m-header flex items-center py-4 px-6 h-header-height">
                    <a href="../dashboard/index.html" className="b-brand flex items-center gap-3">
                        <img src="../assets/images/logo-white.svg" className="img-fluid logo logo-lg" alt="logo" />
                        <img src="../assets/images/favicon.svg" className="img-fluid logo logo-sm" alt="logo" />
                    </a>
                </div>
                <div className="navbar-content h-[calc(100vh_-_74px)] py-2.5">
                    <ul className="pc-navbar">
                        <li className="pc-item pc-caption">
                            <label>Navigation</label>
                        </li>
                            <li className="pc-item">
                            <Link to="/adminDashboard" className="pc-link">
                                    <span className="pc-micon">
                                        <i data-feather="home"></i>
                                    </span>
                                    <span className="pc-mtext">Dashboard</span>
                                </Link>
                            </li>
                        <li class="pc-item pc-hasmenu">
                            <a href="#!" class="pc-link"><span class="pc-arrow"><i class="ti ti-chevron-right"></i></span><span
                                class="pc-mtext">Menu levels</span></a>
                            <ul class="pc-submenu">
                                <li class="pc-item"><a class="pc-link" href="#!">Level 2.1</a></li>
                                <li class="pc-item pc-hasmenu">
                                    <a href="#!" class="pc-link">Level 2.2</a>
                                </li>
                                <li class="pc-item pc-hasmenu">
                                    <a href="#!" class="pc-link">Level 2.3</a>
                                </li>
                            </ul>
                        </li>
                            <li className="pc-item">
                                <Link to="/logout" className="pc-link">
                                    <span className="pc-micon">
                                        <i data-feather="sidebar"></i>
                                    </span>
                                    <span className="pc-mtext">Sample page</span>
                                </Link>
                            </li>
                    </ul>
                </div>
            </div>
        </nav>  
    );
};

export default Menu;