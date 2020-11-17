import logo from './logo.svg';
import './App.css';
import Footer from './Components/Footer/Footer';
import Speciality from './Components/Speciality/Speciality';
import Training from './Components/Training/Training';

function App() {
  return (
    <div className="App">
      <Training></Training>
      <Speciality></Speciality>
      <Footer></Footer>
    </div>
  );
}

export default App;
