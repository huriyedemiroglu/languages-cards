
import { useState } from 'react'
import './Item.css';

const Item = ({card}) => {
  const[showLogo, setShowLogo]=useState(true);
  console.log(card)
return (
   <div className="card" onClick={()=> setShowLogo(!showLogo)}>
     {showLogo ?(
         <div>
         <img src={card.img} alt="logo" className="card-logo" />
         <h3 className='card-title'>{card.name}</h3>
         </div>
      ) :(
       <ul className='list'>
         {card.options.map((element,index)=>{
           return <li key={index}>{element}</li>;
             
          })}

       </ul>
     )}
   </div>
  );
};

export default Item