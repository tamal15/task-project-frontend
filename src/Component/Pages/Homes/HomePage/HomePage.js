import React, { useEffect, useState } from 'react';
import './HomePage.css'
const HomePage = () => {
    const [product,setProduct]=useState([])

    useEffect(()=>{
        fetch('https://murmuring-fjord-57392.herokuapp.com/service')
        .then(res=>res.json())
        .then(data=>{
           
            setProduct(data)
        })
    },[])

  
    return (
        <div>


            <div className="container keywords">
            <h1 className='hitings'><span className='choose-head'>Services</span> product</h1>
            <div className="row row-cols-1 row-cols-md-3 g-4">

            {
                    product.map((offers)=>(
                        <div class="col">
                        <div class="card h-100 photo starts">
                        <div className="photoShops">
                        <img  src={offers.image} class="card-img-top  mx-auto" alt="..."/>
                       
                        </div>
                        
                          <div class="card-body work">
                           
                            <h3 class="card-text text-center names">Name: <span className="s">{offers.name}</span></h3>
                            <h3 class="card-text text-center names">Price: <span className='pros'>{offers.price}</span></h3>

                           
                            
                          </div>
                        
                        </div>
                      </div>
                              
                              
                             
                           
                
                
                      
                 
                    ))
                }
            </div>
        </div>
           
        </div>
    );
};

export default HomePage;