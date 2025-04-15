import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import 'modern-css-reset';
import './Scss-Sass/Constructor/_fonts.scss';
import './Scss-Sass/Constructor/_variables.scss';
import './Scss-Sass/Constructor/_utils.scss';
import './Scss-Sass/Constructor/_global.scss';
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)