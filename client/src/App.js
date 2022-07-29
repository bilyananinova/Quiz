import './App.css';

import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';

import Header from './components/common/Header';
import Footer from './components/common/Footer';

import Home from './components/categories/Home';
import Quiz from './components/quiz/quiz-by-id/Quiz';
import Quizzes from './components/quiz/all-quiz-by-subject/Quizzes';
import CreateQuiz from './components/quiz/create-quiz/CreateQuiz';
import AddQuestionsByQuizById from './components/quiz/add-quiz-by-id/AddQuestionsByQuizById';

import Login from './components/user/Login';
import Register from './components/user/Register';
import Logout from './components/user/Logout';

function App() {
  return (
    <AuthProvider>

      <div className="App">

        <Header />

        <main>

          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/quiz/:id" element={<Quiz />} />
            <Route path="/subject/:id" element={<Quizzes />} />
            <Route path="/create-quiz" element={<CreateQuiz />} />
            <Route path="/add-quiz/:id" element={<AddQuestionsByQuizById />} />

            <Route path="/user/login" element={<Login />} />
            <Route path="/user/register" element={<Register />} />
            <Route path="/user/logout" element={<Logout />} />
          </Routes>

        </main>

        <Footer />

      </div>
    </AuthProvider>

  );
}

export default App;
