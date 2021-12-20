import React, { Suspense, useState } from 'react';
import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import { Home } from 'pages/Home';
import { ProtectedRouter } from './routers/ProtectedRouter';
import { routes } from './ultils/routers';

function App() {
  const [user, setUser] = useState<boolean>(false);

  const renderRoutes =
    routes && routes.map((route, index) => <Route key={index} path={route.path} element={route.element} />);
  return (
    <div className="App">
      <h1>React router</h1>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/news">
                News
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <Suspense fallback={'loading...'}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<ProtectedRouter isAuth={user} />}>
            {renderRoutes}
          </Route>
        </Routes>
      </Suspense>
      <div className="login">
        {!user ? (
          <button onClick={() => setUser(true)}>Login</button>
        ) : (
          <button onClick={() => setUser(false)}>Logout</button>
        )}
      </div>
    </div>
  );
}

export default App;
