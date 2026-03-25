import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// 1. เพิ่มบรรทัด Import นี้ (Path ตามที่ snippet สร้างให้)
import { Provider } from "./components/ui/provider" 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* 2. นำ Provider มาครอบ App แบบนี้ */}
    <Provider>
      <App />
    </Provider>
  </React.StrictMode>,
)

