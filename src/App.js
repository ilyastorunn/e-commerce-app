import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Header from './Components/Header';
import Home from './Pages/Home';
import Footer from './Components/Footer';

function App() {
  return (
    <div className='App'>
      <Header />
      <Home />
      <Footer />
    </div>
  );
};

export default App;
