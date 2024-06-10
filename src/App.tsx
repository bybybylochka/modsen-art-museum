import MainPage from './pages/MainPage';
import GlobalStyles from './global';
import Header from './components/Header';
import Footer from './components/Footer';
import DetailedInfo from './pages/DetailedInfo';
import Favorites from './pages/Favorites';

function App() {
    return (
        <div>
            <Header />
            <MainPage />
            <DetailedInfo />
            <Favorites />
            <Footer />
            <GlobalStyles />
        </div>
    );
}

export default App;
