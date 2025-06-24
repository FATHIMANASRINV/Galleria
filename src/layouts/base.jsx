import React, { useEffect } from 'react';
import Menu from '../layouts/menu';

const BaseLayout = ({ children }) => {
    useEffect(() => {
        if (window.feather) {
            window.feather.replace();
        }
    }, []);
    return (
        <div classNameName="app-wrapper">
            <div classNameName="loader-bg fixed inset-0 bg-white dark:bg-themedark-cardbg z-[1034]">
                <div classNameName="loader-track h-[5px] w-full inline-block absolute overflow-hidden top-0">
                    <div classNameName="loader-fill w-[300px] h-[5px] bg-primary-500 absolute top-0 left-0 animate-[hitZak_0.6s_ease-in-out_infinite_alternate]"></div>
                </div>
            </div>
            <Menu />
            <header className="pc-header">
                <div className="header-wrapper flex max-sm:px-[15px] px-[25px] grow">
                    <div className="me-auto pc-mob-drp">
                        <ul className="inline-flex *:min-h-header-height *:inline-flex *:items-center">
                            <li className="pc-h-item pc-sidebar-collapse max-lg:hidden lg:inline-flex">
                                <a  className="pc-head-link ltr:!ml-0 rtl:!mr-0" id="sidebar-hide">
                                    <i data-feather="menu"></i>
                                </a>
                            </li>
                            <li className="pc-h-item pc-sidebar-popup lg:hidden">
                                <a  className="pc-head-link ltr:!ml-0 rtl:!mr-0" id="mobile-collapse">
                                    <i data-feather="menu"></i>
                                </a>
                            </li>
                            <li className="dropdown pc-h-item">
                                <a className="pc-head-link dropdown-toggle me-0" data-pc-toggle="dropdown"  role="button"
                                    aria-haspopup="false" aria-expanded="false">
                                    <i data-feather="search"></i>
                                </a>
                                <div className="dropdown-menu pc-h-dropdown drp-search">
                                    <form className="px-2 py-1">
                                        <input type="search" className="form-control !border-0 !shadow-none" placeholder="Search here. . ." />
                                    </form>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="ms-auto">
                        <ul className="inline-flex *:min-h-header-height *:inline-flex *:items-center">
                            <li className="dropdown pc-h-item">
                                <a className="pc-head-link dropdown-toggle me-0" data-pc-toggle="dropdown"  role="button"
                                    aria-haspopup="false" aria-expanded="false">
                                    <i data-feather="sun"></i>
                                </a>
                                <div className="dropdown-menu dropdown-menu-end pc-h-dropdown">
                                    <a  className="dropdown-item" onclick="layout_change('dark')">
                                        <i data-feather="moon"></i>
                                        <span>Dark</span>
                                    </a>
                                    <a  className="dropdown-item" onclick="layout_change('light')">
                                        <i data-feather="sun"></i>
                                        <span>Light</span>
                                    </a>
                                    <a  className="dropdown-item" onclick="layout_change_default()">
                                        <i data-feather="settings"></i>
                                        <span>Default</span>
                                    </a>
                                </div>
                            </li>
                            <li className="dropdown pc-h-item">
                                <a className="pc-head-link dropdown-toggle me-0" data-pc-toggle="dropdown"  role="button"
                                    aria-haspopup="false" aria-expanded="false">
                                    <i data-feather="settings"></i>
                                </a>
                                <div className="dropdown-menu dropdown-menu-end pc-h-dropdown">
                                    <a  className="dropdown-item">
                                        <i className="ti ti-user"></i>
                                        <span>My Account</span>
                                    </a>
                                    <a  className="dropdown-item">
                                        <i className="ti ti-settings"></i>
                                        <span>Settings</span>
                                    </a>
                                    <a  className="dropdown-item">
                                        <i className="ti ti-headset"></i>
                                        <span>Support</span>
                                    </a>
                                    <a  className="dropdown-item">
                                        <i className="ti ti-lock"></i>
                                        <span>Lock Screen</span>
                                    </a>
                                    <a  className="dropdown-item">
                                        <i className="ti ti-power"></i>
                                        <span>Logout</span>
                                    </a>
                                </div>
                            </li>
                            <li className="dropdown pc-h-item">
                                <a className="pc-head-link dropdown-toggle me-0" data-pc-toggle="dropdown"  role="button"
                                    aria-haspopup="false" aria-expanded="false">
                                    <i data-feather="bell"></i>
                                    <span className="badge bg-success-500 text-white rounded-full z-10 absolute right-0 top-0">3</span>
                                </a>
                                <div className="dropdown-menu dropdown-notification dropdown-menu-end pc-h-dropdown p-2">
                                    <div className="dropdown-header flex items-center justify-between py-4 px-5">
                                        <h5 className="m-0">Notifications</h5>
                                        <a  className="btn btn-link btn-sm">Mark all read</a>
                                    </div>
                                    <div className="dropdown-body header-notification-scroll relative py-4 px-5"
                                        style={{ maxHeight: 'calc(100vh - 215px)' }}>

                                        <p className="text-span mb-3">Today</p>
                                        <div className="card mb-2">
                                            <div className="card-body">
                                                <div className="flex gap-4">
                                                    <div className="shrink-0">
                                                        <img className="img-radius w-12 h-12 rounded-0" src="/assets/images/user/avatar-1.jpg" alt="Generic placeholder image" />
                                                    </div>
                                                    <div className="grow">
                                                        <span className="float-end text-sm text-muted">2 min ago</span>
                                                        <h5 className="text-body mb-2">UI/UX Design</h5>
                                                        <p className="mb-0">
                                                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
                                                            printer took a galley of
                                                            type and scrambled it to make a type
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card mb-2">
                                            <div className="card-body">
                                                <div className="flex gap-4">
                                                    <div className="shrink-0">
                                                        <img className="img-radius w-12 h-12 rounded-0" src="/assets/images/user/avatar-2.jpg" alt="Generic placeholder image" />
                                                    </div>
                                                    <div className="grow">
                                                        <span className="float-end text-sm text-muted">1 hour ago</span>
                                                        <h5 className="text-body mb-2">Message</h5>
                                                        <p className="mb-0">Lorem Ipsum has been the industry's standard dummy text ever since the 1500.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <p className="text-span mb-3 mt-4">Yesterday</p>
                                        <div className="card mb-2">
                                            <div className="card-body">
                                                <div className="flex gap-4">
                                                    <div className="shrink-0">
                                                        <img className="img-radius w-12 h-12 rounded-0" src="/assets/images/user/avatar-3.jpg" alt="Generic placeholder image" />
                                                    </div>
                                                    <div className="grow ms-3">
                                                        <span className="float-end text-sm text-muted">2 hour ago</span>
                                                        <h5 className="text-body mb-2">Forms</h5>
                                                        <p className="mb-0">
                                                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
                                                            printer took a galley of
                                                            type and scrambled it to make a type
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card mb-2">
                                            <div className="card-body">
                                                <div className="flex gap-4">
                                                    <div className="shrink-0">
                                                        <img className="img-radius w-12 h-12 rounded-0" src="/assets/images/user/avatar-4.jpg" alt="Generic placeholder image" />
                                                    </div>
                                                    <div className="grow ms-3">
                                                        <span className="float-end text-sm text-muted">12 hour ago</span>
                                                        <h5 className="text-body mb-2">Challenge invitation</h5>
                                                        <p className="mb-2">
                                                            <strong>Jonny aber</strong>
                                                            invites to join the challenge
                                                        </p>
                                                        <button className="btn btn-sm btn-outline-secondary me-2">Decline</button>
                                                        <button className="btn btn-sm btn-primary">Accept</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card mb-2">
                                            <div className="card-body">
                                                <div className="flex gap-4">
                                                    <div className="shrink-0">
                                                        <img className="img-radius w-12 h-12 rounded-0" src="/assets/images/user/avatar-5.jpg" alt="Generic placeholder image" />
                                                    </div>
                                                    <div className="grow ms-3">
                                                        <span className="float-end text-sm text-muted">5 hour ago</span>
                                                        <h5 className="text-body mb-2">Security</h5>
                                                        <p className="mb-0">
                                                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
                                                            printer took a galley of
                                                            type and scrambled it to make a type
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-center py-2">
                                        <a  className="text-danger-500 hover:text-danger-600 focus:text-danger-600 active:text-danger-600">
                                            Clear all Notifications
                                        </a>
                                    </div>
                                </div>
                            </li>
                            <li className="dropdown pc-h-item header-user-profile">
                                <a className="pc-head-link dropdown-toggle arrow-none me-0" data-pc-toggle="dropdown"  role="button"
                                    aria-haspopup="false" data-pc-auto-close="outside" aria-expanded="false">
                                    <i data-feather="user"></i>
                                </a>
                                <div className="dropdown-menu dropdown-user-profile dropdown-menu-end pc-h-dropdown p-2 overflow-hidden">
                                    <div className="dropdown-header flex items-center justify-between py-4 px-5 bg-primary-500">
                                        <div className="flex mb-1 items-center">
                                            <div className="shrink-0">
                                                <img src="/assets/images/user/avatar-2.jpg" alt="user-image" className="w-10 rounded-full" />
                                            </div>
                                            <div className="grow ms-3">
                                                <h6 className="mb-1 text-white">Carson Darrin 🖖</h6>
                                                <span className="text-white">carson.darrin@company.io</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="dropdown-body py-4 px-5">
                                        <div className="profile-notification-scroll position-relative" style={{ maxheight: 'calc(100vh - 225px)' }}>
                                            <a  className="dropdown-item">
                                                <span>
                                                    <svg className="pc-icon text-muted me-2 inline-block">
                                                        <use href="#custom-setting-outline"></use>
                                                    </svg>
                                                    <span>Settings</span>
                                                </span>
                                            </a>
                                            <a  className="dropdown-item">
                                                <span>
                                                    <svg className="pc-icon text-muted me-2 inline-block">
                                                        <use href="#custom-share-bold"></use>
                                                    </svg>
                                                    <span>Share</span>
                                                </span>
                                            </a>
                                            <a  className="dropdown-item">
                                                <span>
                                                    <svg className="pc-icon text-muted me-2 inline-block">
                                                        <use href="#custom-lock-outline"></use>
                                                    </svg>
                                                    <span>Change Password</span>
                                                </span>
                                            </a>
                                            <div className="grid my-3">
                                                <button className="btn btn-primary flex items-center justify-center">
                                                    <svg className="pc-icon me-2 w-[22px] h-[22px]">
                                                        <use href="#custom-logout-1-outline"></use>
                                                    </svg>
                                                    Logout
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div></div>
            </header>
            <div class="pc-container">
                <div class="pc-content">
                    <div class="page-header">
                        <div class="page-block">
                            <div class="page-header-title">
                                <h5 class="mb-0 font-medium">Sample Page</h5>
                            </div>
                            <ul class="breadcrumb">
                                <li class="breadcrumb-item"><a href="../dashboard/index.html">Home</a></li>
                                <li class="breadcrumb-item"><a href="javascript: void(0)">Other</a></li>
                                <li class="breadcrumb-item" aria-current="page">Sample Page</li>
                            </ul>
                        </div>
                    </div>
                    {children}
                </div>
            </div>
            <footer class="pc-footer">
                <div class="footer-wrapper container-fluid mx-10">
                    <div class="grid grid-cols-12 gap-1.5">
                        <div class="col-span-12 sm:col-span-6 my-1">
                            <p class="m-0"></p>
                            <a href="https://codedthemes.com/" class="text-theme-bodycolor dark:text-themedark-bodycolor hover:text-primary-500 dark:hover:text-primary-500" target="_blank">CodedThemes</a>
                            , Built with ♥ for a smoother web presence.

                        </div>
                        <div class="col-span-12 sm:col-span-6 my-1 justify-self-end">
                            <p class="inline-block max-sm:mr-3 sm:ml-2">Distributed by <a href="https://themewagon.com" target="_blank">Themewagon</a></p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};
export default BaseLayout;
