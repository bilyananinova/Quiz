import './App.css';

import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import AdminRoute from './components/common/helpers/AdminRoute';
import UserRoute from './components/common/helpers/UserRoute';

import Header from './components/common/Header';
import Footer from './components/common/Footer';

import Home from './components/categories/Home';
import Quiz from './components/quiz/quiz-by-id/Quiz';
import Quizzes from './components/quiz/all-quiz-by-subject/Quizzes';
import Newest from './components/quiz/newest-quizzes/Newest';
import CreateQuiz from './components/quiz/create-quiz/CreateQuiz';
import AddQuestionsByQuizById from './components/quiz/add-quiz-by-id/AddQuestionsByQuizById';

import Login from './components/user/Login';
import Register from './components/user/Register';
import Logout from './components/user/Logout';

import PageNotFound from './components/error/PageNotFound';

function App() {
  return (
    <AuthProvider>

      <div className="App">

        <Header />

        <main>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/newest" element={<Newest />} />

            <Route path="/quiz/:id" element={
              <UserRoute>
                <Quiz />
              </UserRoute>
            } />
            <Route path="/subject/:id" element={
              <UserRoute>
                <Quizzes />
              </UserRoute>
            } />

            <Route path="/create-quiz" element={
              <AdminRoute>
                <CreateQuiz />
              </AdminRoute>}
            />
            <Route path="/add-quiz/:id" element={
              <AdminRoute>
                <AddQuestionsByQuizById />
              </AdminRoute>
            } />

            <Route path="/user/login" element={<Login />} />
            <Route path="/user/register" element={<Register />} />
            <Route path="/user/logout" element={<Logout />} />

            <Route path="*" element={<PageNotFound />} />
          </Routes>

        </main>

        <Footer />

      </div>
    </AuthProvider>

  );
}

export default App;
