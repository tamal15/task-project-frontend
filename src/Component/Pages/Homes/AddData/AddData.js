import React from 'react';
import { useForm } from 'react-hook-form';
// import { useForm } from "react-hook-form";
import axios from 'axios';
import './AddData.css'
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';
const AddData = () => {
    const { register, handleSubmit ,reset} = useForm();
    // const onSubmit=data=>{console.log(data)}
    const onSubmit= (data) =>{
        // console.log(data)
      
        axios.post('https://murmuring-fjord-57392.herokuapp.com/service',data)
      .then(res=>{
          console.log(res)
           if(res.data.insertedId){
              alert('added successfully');
              reset()
          }
      })
        //  e.preventDefault()
    }
    return (
        <div>
          <Navigation></Navigation>
         <h1>Add new Products</h1>
        
         <div className="submits">
          <form onSubmit={handleSubmit(onSubmit)}>
   <input {...register("id", { required: true, maxLength: 2 })} placeholder="ID" />
   <input {...register("name", { required: true, maxLength: 20 })} placeholder="name" />
   <textarea {...register("description")} placeholder="description"/>
  
   <input
                {...register("price", { required: true })}
                placeholder="price"
              
                type="number"
                className="p-2 m-2  input-field"
              />

   <input
            {...register("image", { required: true })}
                placeholder="Image Link"
                // defaultValue={details?.img}
                className="p-2 m-2  input-field"
              />

     <input
            {...register("date")}
              type="date"
                className="p-2 m-2"
              />



   <input type="submit" />
 </form>
         
     </div>

     <Footer></Footer>
            
        </div>
    );
};

export default AddData;