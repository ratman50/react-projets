import { useEffect, useState } from 'react';
import './App.css';
import Recipe from './components/Recipe';
import {FcSearch} from 'react-icons/fc';

function App() {
  const APP_ID='5e20a5a6' ;
  const APP_KEY='a602a96a2cdb89cfab1144a7ca13290c';
  const [recipe, setRecipe] = useState([])
  const [valSearch, setValSearch] = useState("egg");
  const [isSearch, setIsSearch] = useState(false);
 
  function handleValSearch(e) {
    const value=e.target.value.toLowerCase();
    setValSearch(value);
  }
  useEffect(()=>{
   getRecipes();
   setIsSearch(false);
   
  },[isSearch])
  const getRecipes=async ()=>{
    const request=`https://api.edamam.com/search?q=${valSearch}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=30`;

    const response= await fetch(request);
    let data;
    if (response.ok)
    {
        data= await response.json();
        data=data.hits
        setRecipe(data);
    }
    else
    {
      setRecipe([]);
    }
   
    
  }
  function handleSubmit(e) {
    e.preventDefault();
    setIsSearch(true);

  }
  return (
    <div className="App">
      <form className='search-form'  onSubmit={handleSubmit}>
          <div className="container">

            <input type="text" onChange={handleValSearch} value={valSearch} className='searchbar'  />
            <button type="submit" ><FcSearch className='fcsearch'/> </button>
          </div>
      </form>

       <div className="search_result">
      { recipe.length==0 ? <h1>NOT FOUND</h1>:
        recipe.map((item, index)=><Recipe key={`r${index}`} item={item.recipe}/>)
      }
      </div>
      
    </div>
  );
}

export default App;
