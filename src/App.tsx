import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Calendar from './components/Calendar'
import SessionDairy from './components/SessionDairy';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Calendar />} />
          <Route path="/session-diary" element={<SessionDairy />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
