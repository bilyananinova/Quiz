import './App.css';

import { Routes, Route } from 'react-router-dom';

import Header from './components/common/Header';
import Footer from './components/common/Footer';

import Home from './components/Home';

import Login from './components/user/Login';
import Register from './components/user/Register';

function App() {
  return (
    <div className="App">

      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </main>

      <Footer />

    </div>
  );
}

export default App;
