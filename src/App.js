import "./App.css";
import Footer from "./Footer";
import Navbar from "./NavBar.js";
import Courses from './components/Courses'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Courses />
      <Footer />
    </div>
  );
}

export default App;
