import React from 'react';
import ReactDOM from 'react-dom/client';
import {HelloWorldApp} from './HelloWorldApp';
import { FirstApp } from './FirstApp';



// export default App

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <HelloWorldApp/>
        <FirstApp/>
    </React.StrictMode>
);