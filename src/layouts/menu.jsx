import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
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
                           
                            <li className="pc-item pc-hasmenu">
                                <a href="#!" className="pc-link"><span className="pc-micon"> <i data-feather="align-right"></i> </span><span
                                    className="pc-mtext">Menu levels</span><span className="pc-arrow"><i className="ti ti-chevron-right"></i></span></a>
                                <ul className="pc-submenu">
                                    <li className="pc-item"><a className="pc-link" href="#!">Level 2.1</a></li>
                                    <li className="pc-item pc-hasmenu">
                                        <a href="#!" className="pc-link">Level 2.2<span className="pc-arrow"><i className="ti ti-chevron-right"></i></span></a>
                                        <ul className="pc-submenu">
                                            <li className="pc-item"><a className="pc-link" href="#!">Level 3.1</a></li>
                                            <li className="pc-item"><a className="pc-link" href="#!">Level 3.2</a></li>
                                            <li className="pc-item pc-hasmenu">
                                                <a href="#!" className="pc-link">Level 3.3<span className="pc-arrow"><i className="ti ti-chevron-right"></i></span></a>
                                                <ul className="pc-submenu">
                                                    <li className="pc-item"><a className="pc-link" href="#!">Level 4.1</a></li>
                                                    <li className="pc-item"><a className="pc-link" href="#!">Level 4.2</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="pc-item pc-hasmenu">
                                        <a href="#!" className="pc-link">Level 2.3<span className="pc-arrow"><i className="ti ti-chevron-right"></i></span></a>
                                        <ul className="pc-submenu">
                                            <li className="pc-item"><a className="pc-link" href="#!">Level 3.1</a></li>
                                            <li className="pc-item"><a className="pc-link" href="#!">Level 3.2</a></li>
                                            <li className="pc-item pc-hasmenu">
                                                <a href="#!" className="pc-link">Level 3.3<span className="pc-arrow"><i className="ti ti-chevron-right"></i></span></a>
                                                <ul className="pc-submenu">
                                                    <li className="pc-item"><a className="pc-link" href="#!">Level 4.1</a></li>
                                                    <li className="pc-item"><a className="pc-link" href="#!">Level 4.2</a></li>
                                                </ul>
                                            </li>
                                        </ul>
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