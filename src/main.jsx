import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import SpinnerLoader from './components/SpinnerLoader.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SpinnerLoader />
  </StrictMode>,
)
