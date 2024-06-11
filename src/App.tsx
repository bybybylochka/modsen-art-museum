import MainPage from './pages/MainPage';
import GlobalStyles from './global';
import Header from './components/Header';
import Footer from './components/Footer';
import DetailedInfo from './pages/DetailedInfo';
import Favorites from './pages/Favorites';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path={'/'} element={<MainPage />} />
                <Route path={'/detailed-info/:id'} element={<DetailedInfo />} />
                <Route path={'/favorites'} element={<Favorites />} />
            </Routes>
            <Footer />
            <GlobalStyles />
        </Router>
    );
}

export default App;
