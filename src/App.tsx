import MainPage from './pages/MainPage';
import GlobalStyles from './global';
import Header from './components/Header';
import Footer from './components/Footer';
import DetailedInfo from './pages/DetailedInfo';

function App() {
    return (
        <div>
            <Header />
            {/*<MainPage />*/}
            <DetailedInfo />
            <Footer />
            <GlobalStyles />
        </div>
    );
}

export default App;
