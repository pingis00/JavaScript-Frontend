import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './views/Home'
import News from './views/News'
import NewsDetails from './views/NewsDetails'
import Contact from './views/Contact'
import NotFound from './views/NotFound/NotFound'
import { ArticleProvider } from './contexts/ArticleContext'

function App() {

  return (
    <BrowserRouter>
      <ArticleProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news" element={<News />} />
          <Route path="/newsDetails" element={<NewsDetails />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ArticleProvider>
    </BrowserRouter>
  )
}

export default App
