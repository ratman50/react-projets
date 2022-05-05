import './App.css';
import { Game } from './containers';
import { MatriceProvider } from './Contexts';

function App() {
  return (
    <div className="App">
      <MatriceProvider>

          <Game/>
      </MatriceProvider>
      
    </div>
  );
}

export default App;
