import React from 'react';
import ReactDOM from 'react-dom/client';
// import {HelloWorldApp} from './HelloWorldApp';
// import { FirstApp } from './FirstApp';
import './styles.css'
import { CounterApp } from './CounterApp';

// export default App

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <CounterApp value={123} />
    </React.StrictMode>
);