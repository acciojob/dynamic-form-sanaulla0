
import React ,{useState} from "react";
import './../styles/App.css';

const App = () => {
  const [flag , setFlag] = useState([]);

const handelSet = (e) =>{
           e.preventDefault();
          setFlag([...flag,""]);
         
}
const handlechange = (index,flag)=>{
   const prev = [...flag];
   prev[index] = value;
   setFlag(prev);
   
}
const handledelete = (index)=>{
     let dummy = [...flag];
     dummy.splice(index,1);
     setFlag(dummy);
}

  return (
    <div>
      
         
          {flag.length ===0 ? 
         <p>No feild in the form</p>  
         : (
          flag.map((item,index)=>(
        
            <div>
                    <input type="text" value={item} onChange={(e)=>handlechange(index,e.target.value)}  />  &nbsp;
                    <button type="button"className="delete" value={item} onClick={()=>handledelete(index)}>Delete</button>  <br/>
     &nbsp;
                 </div>
     
             ))
         )
        }
        <br/>
      
 
        <button className="add"  onClick= {handelSet}>Add field</button>
    </div>
  )
}

export default App;

