import ResultsPage from "./components/results-page/ResultsPage"
import SearchPage from "./components/search-page/SearchPage"
import './components/style/style.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={SearchPage} />
        <Route path="/results" Component={ResultsPage} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
