import React from 'react'

  const ItemListContainer = () => {
    const cargaProduct = async () => {
          const res = await fetch ("data.json");
          const data = await res.json();
          console.log (data) 
                
  };
  


  return (
    <div>
      
    </div>
  
  )
 
};



export default ItemListContainer