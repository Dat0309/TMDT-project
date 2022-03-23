import './App.css';
import Home from './views/Body/Home';
import Header from './views/Header/Header';

function App() {
  return (
    <div className="App">
      {/*Header*/}
      <Header />

      {/*Body*/}
      <Home />
    </div>
  );
}

export default App;
