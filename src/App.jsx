import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom'
import './App.css'
import { useDispatch } from 'react-redux';
import { Login, Register, HomePage, DashboardPage } from './pages';
import { checkIsLoggedIn } from './redux/ActionCreators/authActionCreators';
const App = () => {

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(checkIsLoggedIn());
  }, []);

  return (
      <div className='App'>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/dashboard' element={<DashboardPage />} />
        </Routes>
      </div>
  );
};

export default App
