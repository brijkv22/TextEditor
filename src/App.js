import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
      <Navbar title="Change" About="Contact" />
      
      <div className="container">
      <TextForm heading="Enter the text" />
      {/* <About/> */}
      </div>
    </>
  );
}

export default App;
