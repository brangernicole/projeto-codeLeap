import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SignUp from './pages/SignUp'
import Main from './pages/Main'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/Main" element={<Main />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App