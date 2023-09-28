import React, {Suspense} from 'react';
import Loader from "components/Loader";
import {Route, Routes} from "react-router-dom";
import AboutPage from "pages/AboutPage/ui";
import MainPage from "pages/MainPage/ui";
import {routeConfig} from "shared/config/routeConfig/routeConfig";

const AppRouter = () => {
  return (
    <Suspense fallback={<Loader/>}>
      <Routes>
        {Object.values(routeConfig).map(({path, element}) => (
          <Route
            key={path}
            path={path}
            element={element}
          />
        ))}
      </Routes>
    </Suspense>
  );
};

export default AppRouter;