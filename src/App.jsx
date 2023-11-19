import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './views/Home'
import News from './views/News'
import NewsDetails from './views/NewsDetails'
import Contact from './views/Contact'
import NotFound from './views/NotFound/NotFound'
import { ArticleProvider } from './contexts/ArticleContext'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'


function App() {

  return (
    <BrowserRouter>
      <ArticleProvider>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news" element={<News />} />
          <Route path="/newsDetails/:id" element={<NewsDetails />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ArticleProvider>
    </BrowserRouter>
  )
}

export default App
