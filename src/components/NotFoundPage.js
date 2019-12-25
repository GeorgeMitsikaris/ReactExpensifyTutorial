import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
    <div>
        <div>Page Not Found</div>
        <Link to="/">Go Home</Link>
    </div>
)

export default NotFoundPage;