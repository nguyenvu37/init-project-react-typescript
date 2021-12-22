import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from 'pages/components/Home';
import { ProtectedRouter } from './routers/ProtectedRouter';
import { routes } from './ultils/routers';
import './App.scss';
import { Menu } from 'components/Menu';
import { Button } from 'components/Button';
import { useAppSelector } from 'redux/hooks';
import { useAppDispatch } from './redux/hooks';
import { login, logout } from 'redux/actions/actionCreators';

function App() {
  const user = useAppSelector((state) => state.userReducer.user);
  const dispatch = useAppDispatch();
  const handleLogin = () => {
    dispatch(login(true));
  };

  const handleLogout = () => {
    dispatch(logout(false));
  };

  const renderRoutes =
    routes && routes.map((route, index) => <Route key={index} path={route.path} element={route.element} />);
  return (
    <div className="App">
      <h1>React router</h1>
      <Menu />
      <Suspense fallback={'loading...'}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<ProtectedRouter isAuth={user} />}>
            {renderRoutes}
          </Route>
        </Routes>
      </Suspense>
      <div className="login mt-2">
        {!user ? (
          <Button handleClick={handleLogin} text="Login" />
        ) : (
          <Button handleClick={handleLogout} text="Logout" />
        )}
      </div>
    </div>
  );
}

export default App;
