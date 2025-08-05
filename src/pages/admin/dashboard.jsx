import React, { useState, useEffect } from 'react';
import Base from '../../layouts/base';
import { SITE_NAME } from '../api/config';

const AdminDashboard = () => {
    useEffect(() => {
        document.title = 'Dashboard | ' + SITE_NAME;
    }, []);
    return (
        <Base>
           
        </Base>
    );
};
export default AdminDashboard; 