// головний файл js в який треба імпортувати наш App та React
import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
// імпорт головних стилей (тут можна зкидати дефолтні стилі для розмітки)
import './index.css';

// прописуємо метод для рендингу розмітки в наш HTML
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* імпортую App в обои'язковий батьківський елемент */}
    <App />
  </React.StrictMode>
);
