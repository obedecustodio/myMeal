import React, { useEffect, useState } from 'react'
import $ from 'jquery'
export const Api = () => {

    const [data, setData] = useState({
      nome: "Smartphone",
      marca: "xiaomi",
      preco: 10000
    });

    console.log(JSON.stringify(data))
    useEffect(() =>{
        $.ajax({
          url: 'http://127.0.0.1:8000/api/teste', // Replace with your API endpoint
          method: 'GET',
          dataType: 'json', // Set the expected data type
          success: (data) => {
            console.log('Data received:', data);
            // Update your state or perform other actions with the data
          },
          error: (error) => {
            console.error('Error:', error);
          },
        });
    })

    const send = async () =>{
      const res = fetch('http://127.0.0.1:8000/api/post', {
        method: 'POST',
        headers:{
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      })
    }
    
  return (
    <div>Api</div>
  )
}
