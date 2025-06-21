import React from 'react';

const LoginLayout = ({ children }) => {
    return (
        <div className="auth-main relative">
            <div className="auth-wrapper v1 flex items-center w-full h-full min-h-screen">
                <div className="auth-form flex items-center justify-center grow flex-col min-h-screen relative p-6">
                    <div className="w-full max-w-[350px] relative">
                        <div className="auth-bg">
                            <span className="absolute top-[-100px] right-[-100px] w-[300px] h-[300px] block rounded-full bg-theme-bg-1 animate-[floating_7s_infinite]" />
                            <span className="absolute top-[150px] right-[-150px] w-5 h-5 block rounded-full bg-primary-500 animate-[floating_9s_infinite]" />
                            <span className="absolute left-[-150px] bottom-[150px] w-5 h-5 block rounded-full bg-theme-bg-1 animate-[floating_7s_infinite]" />
                            <span className="absolute left-[-100px] bottom-[-100px] w-[300px] h-[300px] block rounded-full bg-theme-bg-2 animate-[floating_9s_infinite]" />
                        </div>

                        <div className="card sm:my-12 w-full shadow-none">
                            <div className="card-body !p-10">
                                <div className="text-center mb-8">
                                    <img
                                        src={`${process.env.PUBLIC_URL}/assets/images/logo-dark.svg`}
                                        alt="logo"
                                        className="mx-auto auth-logo"
                                    />
                                </div>
                                {children}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginLayout;