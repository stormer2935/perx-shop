import React from 'react';
import {HashRouter as Router, Route, Routes} from 'react-router-dom';
import {Provider} from 'react-redux';
import {store} from './store/store';
import Goods from './components/Goods/Goods';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import {ThemeProvider} from './context/ThemeContext';
import './styles/theme.css';

interface AppProps {
    dealers?: string[];
}

const App: React.FC<AppProps> = ({dealers}) => {
    return (
        <ThemeProvider>
            <Provider store={store}>
                    <Router>
                        <Layout>
                            <Routes>
                                <Route path="/" element={<Goods dealers={dealers}/>}/>
                                <Route path="/cart" element={<Cart/>}/>
                            </Routes>
                        </Layout>
                    </Router>
            </Provider>
        </ThemeProvider>
    );
};

export default App;