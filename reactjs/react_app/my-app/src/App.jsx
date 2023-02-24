// import logo from './logo.svg';
// import './App.css';
import Header from './components/Header';
import Slider from './components/Slider';
import Content1 from './components/Content1';
import './asset/scss/app.scss';

function App() {
  return (
    <div className="App">
      {/* <h2 className="test w-180 h-200 p-20">Test</h2> */}
      <Header />
      <Slider />
      <Content1 />
    </div>
  );
}

export default App;
