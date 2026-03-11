import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SignUp from './pages/SignUp'
import Main from './pages/Main'
import Edit from './pages/Edit'
import Delete from './pages/Delete'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/Main" element={<Main />} />
        <Route path="/Edit" element={<Edit />} />
        <Route path="/Delete" element={<Delete />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App