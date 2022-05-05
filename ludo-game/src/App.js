import './App.css';
import { Table } from './container';
import { Home } from './components';
function App() {
  return (
    <div className="App">
      <Home/>
          <div className="container">
            <div className="case green">
            </div>
            <div className="case yellow">
            </div>
            <div className="case red">
            </div>
            <div className="case blue">
            </div>
            <Table/>
          </div>
    </div>
  
    
  );
}

export default App;
