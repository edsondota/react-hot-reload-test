import {AppContainer } from 'react-hot-loader';
import React from 'react';
import ReactDom from 'react-dom';
import App from './App';

const rootElement = document.getElementById('root');
console.log(rootElement);
ReactDom.render(
    <AppContainer>
        <App />
    </AppContainer>,
    rootElement
);

if(module.hot) {
    module.hot.accept('./App', () => {
        const NextApp = require('./App').default;
        ReactDom.render(
            <AppContainer>
                <NextApp />
            </AppContainer>,
            rootElement
        );
    });
}
