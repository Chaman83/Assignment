import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import './App.css';
import Home from './components/Page/home';
import Description from './components/Page/detail';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" Component={Home} />
          <Route path="/description" Component={Description}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
