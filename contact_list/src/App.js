import './App.css';
import ContactCard from './ContactCard';
import {useState,useEffect} from 'react';
function App() {
  const [data, setData] = useState([]);
  const [stat, setStat] = useState(true)
  useEffect(()=>{
      fetch('https://randomuser.me/api/?results=20')
      .then(response=>response.json())
      .then(datas=>{
        console.log(datas.results);
        let res=[];
        datas.results.forEach(item =>
          {
            const it={
              email:item.email,
              name: item.name.first+" "+item.name.last,
              age:item.dob.age,
              picture:item.picture.large
  
            }
            res.push(it);
  
          });
        setData(res);
        setStat(false);
      })
    },[]);
  return (
    <div  className='App' >
      {!stat ? data.map((item,index)=><ContactCard  key={`r${index}`} item={item}/>) : "Waiting......"}
    </div>
  );
}

export default App;
