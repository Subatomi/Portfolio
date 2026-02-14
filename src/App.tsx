import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home.tsx'
import MyWorks from './pages/MyWorks/MyWork.tsx'

export default function App() {
  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/MyWorks" element={<MyWorks />} />
          <Route path="*" element={<div>Page Not Found</div>} />
        </Routes>
      </BrowserRouter>
    </main>
  )
}