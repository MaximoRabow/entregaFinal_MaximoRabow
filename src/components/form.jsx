import React from 'react'
import { useState } from 'react'
import { getFirestore, collection, addDoc } from "firebase/firestore";


const form = () => {
    const [orderId, setOrderId] = useState (null);
    const [name, setName] = useState ("");
    const [email, setEmail] = useState ("");

    const db = getFirestore ();

    const handleSubmit = (e) => {
        e.preventDefault ();
        addDoc ( ordersCollection, order ).then (({id}) => setOrderId (id));
    } 
    const order = {
        name, 
        email,
    };
    const ordersCollection = collection (db, 'order')

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Nombre y Apellido' onChange={(e) => setName (e.target.value)}/>
            <input type="text" placeholder='Email' onChange={(e) => setName (e.target.value)}/>
            <button type='submit'>Enviar Informacion</button>
        </form>
        <p>Nro de orden: {orderId}</p>
    </div>
  )
}

export default form