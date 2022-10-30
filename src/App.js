import './App.scss';
import Header from "./components/Header/Header.js"
import Sidebar from "./components/Sidebar/Sidebar.js"
import Main from "./components/Main/Main.js"
import Footer from "./components/Footer/Footer.js"

function App() {
  return (
      <div className="app">
        <Header />
        <Sidebar />
        <Main />
        <Footer />
      </div>
  );
}

export default App;
