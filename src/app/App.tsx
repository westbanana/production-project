import React, { Suspense } from 'react';
import './styles/index.scss';

import { useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames';
import { AppRouter } from 'app/providers/router';
import { NavBar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { PageLoader } from 'widgets/PageLoader/ui/PageLoader';

const App = () => {
    const { theme } = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback={<PageLoader />}>
                <NavBar />
                <div className="content-page">
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
};

export default App;
