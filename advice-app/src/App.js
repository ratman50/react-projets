import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [advice, setAdvice]=useState('');
  const [search, setSearch] = useState(false);
  const  fetchAdvice=()=>{
    axios.get("https://api.adviceslip.com/advice")
          .then((response)=>{
            const {advice}=response.data.slip
            setAdvice(advice)
            console.log(advice);
          })
          .catch((error)=>{
            console.log(error);
          });
    setSearch(false);
  }
  useEffect(() => {
    fetchAdvice();
  
  }, [search]);
  const handleSearch=()=>{
    setSearch(true);
  }
  
  return (
    <div className="app">
      <div className="card">
        <h1 className='heading'>{advice}</h1>
        <button className="button" onClick={handleSearch}>
          <span>GIVE ME ADVICE !</span>
        </button>
      </div>
    </div>
  );
}

export default App;
