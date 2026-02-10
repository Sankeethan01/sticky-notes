import { Route, Routes } from "react-router"
import HomePage  from './pages/HomePage'
import CreateNotePage from './pages/CreateNotePage'
import NoteDetailPage from './pages/NoteDetailPage'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/create' element={<CreateNotePage />} />
        <Route path='/note/:id' element={<NoteDetailPage />} />
      </Routes>
    </div>
  )
}

export default App
