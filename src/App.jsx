import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './views/Home'
import News from './views/News'
import NewsDetails from './views/NewsDetails'
import Contact from './views/Contact'
import NotFound from './views/NotFound/NotFound'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/newsDetails" element={<NewsDetails />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
