
import './App.css';
import Cards from './components/cards/Cards';
import {useState,useEffect,createContext} from "react";

/* create context here for sharing data with card component */
const CardContext=createContext();

function App() {
  /* usestate for storing data in state  */
  const[data,setData]=useState([]);
  /* loading for a time taken by the fetch so we can show is loading by this state */
  const[loading,setLoading]=useState(false);
  /* search for hold the input of search bar */
  const[search,setSearch]=useState("");
    /* cls state for scroll function on scroll header color will change */
  const[clas,setClas]=useState(false);
   /* useEffect function for fetching data on for stopping rerender of fetch function */
  useEffect(() => {
     fetchData();
  }, []);
   /* fetching data for api */
  const  fetchData=()=>{
    setLoading(true)
    fetch(`https://api.npoint.io/20c1afef1661881ddc9c`)
   .then(res=>res.json())
   .then(data=>{
     setData(data.playerList);
     setLoading(false);
  })
  .catch((error)=>{
    console.log(error);
    setLoading(false);
  })
  }
  /* on input value function */
  const searchPlayer=(e)=>{
     setSearch(e.target.value);
  }
  /* filter function base on input that store in search state and fetched data */
  const filteredCards= data.filter((player)=>{
    return (
      player.TName.toLowerCase().includes(search.toLocaleLowerCase())||
      player.PFName.toLowerCase().includes(search.toLocaleLowerCase())
    )
  })
  /* run this function on scroll bar */
  const changeBack=()=>{
    if(window.scrollY >=80){
      setClas(false)
    }
   else{
     setClas(true);
   }
  }
  window.addEventListener('scroll',changeBack);
  return (
    <div className="App">
     {/* header */}
       <div className={clas?"head":"header"}>
      <h1>Sportz Interactive Assignment</h1>
       {/* header search input */}
          <div className='search'>

            <input onChange={searchPlayer} placeholder='Search Player'/><i class="fa-solid fa-magnifying-glass"></i>
          </div>
      </div>
        {/* is loading function */}
      {loading?"Loading........":
             
     <div>
        {/* if loading is false then run this */}
     <CardContext.Provider value={filteredCards}>
       {/*context provider for sending data to the cards */}
       <Cards/>
      
         
      </CardContext.Provider>
    
     </div>
     
      
      }
    
    </div>
  );
}
{/*exporting cardcontext that we created on upward */}
export {CardContext};
export default App;
