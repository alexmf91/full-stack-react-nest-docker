import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom'

import { AppLayout } from '@noister/layouts'
import { Home, Gasazon } from '@noister/pages'

function App() {
  return (
    <BrowserRouter>
      <AppLayout>
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<Home />} />
          <Route path="gasazon/*" element={<Gasazon />} />
          <Route path="*" element={<p>Not Found</p>} />
        </Routes>
      </AppLayout>
    </BrowserRouter>
  )
}

export default App
