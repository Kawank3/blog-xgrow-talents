import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import 'highlight.js/styles/github.css';
import 'bytemd/dist/index.css';

import './markdown.css';
import './index.css';

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
