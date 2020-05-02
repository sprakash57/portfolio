import React from 'react';
import Layout from '../components/layout';
import { Link } from 'gatsby';

const NotFound = () => {
    return (
        <Layout title='404'>
            <h2>Page Not Found</h2>
            <p><Link to='/'>Go to Home</Link></p>
        </Layout>
    )
}

export default NotFound;