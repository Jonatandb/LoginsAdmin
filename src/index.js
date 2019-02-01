/* eslint-disable no-console */

import React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import App from 'components/App';

if ((process.env.NODE_ENV === 'production')) {
    console.log('__PROD__');
} else {
    console.log('__DEV__');
}

ReactDOM.render(
    <React.Fragment>
        <CssBaseline />
        <App />
    </React.Fragment>,
    document.getElementById('root')
);
