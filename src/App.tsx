import React, {Suspense, useCallback, useContext, useState} from 'react';
import {Link, Route, Routes} from 'react-router-dom';
import './styles/index.scss'
import {AboutPageAsync} from "./pages/AboutPage/index.async";
import {MainPageAsync} from "./pages/MainPage/index.async";
import Loader from "./components/Loader";
import {Theme, ThemeContext} from "./theme/ThemeContext";
import {useTheme} from "./theme/useTheme";
import {classNames} from "./helpers/classNames";
const App = () => {
  const { theme, toggleTheme } = useTheme()
  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>TOGGLE</button>
      <Link to='/'>
        Головна
      </Link>
      <Link to='/about'>
        О сайті
      </Link>
      <Suspense fallback={<Loader/>}>
        <Routes>
            <Route
              path={'/about'}
              element={<AboutPageAsync/>}
            />
            <Route
              path={'/'}
              element={<MainPageAsync/>}
            />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;