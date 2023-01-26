// import logo from './logo.svg';
import { BrowserRouter as Router} from "react-router-dom";
import "./App.css";
import "./assets/css/style.css";
import Navbar from "./components/Navbar";
import Layout from './components/Layout';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Layout/>
      </Router>
    </>
  );
}

export default App;
