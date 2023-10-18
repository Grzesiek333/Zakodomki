import './App.scss'
import { 
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'; 

import './calendar.jsx';
import InlineDemo from './calendar.jsx';
import CalendarComponent from './import_booking'

function App() {
   return (
    <>
      <h1>Zakodomki</h1>
      <div>abc</div>
      <InlineDemo />
      <CalendarComponent />
    </>
  )
}

export default App
