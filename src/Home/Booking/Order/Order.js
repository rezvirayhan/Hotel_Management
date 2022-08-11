import React, { useEffect, useState } from 'react';

const Order = () => {

    const [myorder, setMyoder]= useState([]);
    useEffect(()=>{
        fetch("http://localhost:5000/myOrder")
        .then(res => res.json())
        .then(data=> setMyoder(data));   
    },[])
    console.log(myorder);
    return (
        <div>
             {myorder?.map((orderfood) => (
             
             <h1>Name: {orderfood.name}</h1>
              
            ))}


        </div>
    );
};

export default Order;