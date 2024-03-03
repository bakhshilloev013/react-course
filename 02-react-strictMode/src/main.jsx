import React, { StrictMode } from 'react'; // отвечает за работу всего функционала React библиотеки, например такие как jsx код и т.д.
import ReactDOM from 'react-dom/client'; // отвечает за работу на странице
import App from './App.jsx'; // импорт компонента App
import './index.css'; // импорт стилизаций из документа index.css

ReactDOM.createRoot(document.getElementById('root')).render(
    <StrictMode>
        <App />
    </StrictMode>
);
