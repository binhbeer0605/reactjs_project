import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from '@/routes';
import { DefaultLayout } from '@/layouts';
import { Fragment } from 'react';
import { TitlePage } from '@/components';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {publicRoutes.map((route, index) => {
                        const Layout =
                            route.layout === null ? Fragment : route.layout || DefaultLayout;
                        const Page = route.component;
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <>
                                        <Layout>
                                            {route.title === null ? null : (
                                                <TitlePage title={route.title} />
                                            )}
                                            <Page />
                                        </Layout>
                                    </>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
