import './App.css'
import { Route, Routes } from 'react-router-dom';

import { Home } from './view/Home'
import { UserUpdate } from './view/UserUpdate'

function App() {
  return (
    <Routes>
      <Route path='/user/:id' element={<UserUpdate/>}>
      </Route>
      <Route path='/' element={<Home/>}>
      </Route>
    </Routes>
  )
}

export default App;
