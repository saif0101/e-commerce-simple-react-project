import React from 'react';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../App';
import './Shipment.css'

const Shipment = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [loggedInUser,setLoggedInUser]= useContext(UserContext)
    const onSubmit = data => console.log(data);
  
    console.log(watch("example")); // watch input value by passing the name of it
  
    return (
      <form className="ship-form" onSubmit={handleSubmit(onSubmit)}>
        
        <input defaultValue={loggedInUser.name} {...register("name", { required: true })} placeholder="your name"/>
        {errors.name && <span className ='error'>This field is required</span>}
    

       
        <input defaultValue={loggedInUser.email} {...register("email", { required: true })} placeholder="your Email" />
        {errors.email && <span className ='error'>This field is required</span>}
        

        
        <input {...register("address", { required: true })} placeholder="your Address"/>
        {errors.address && <span className ='error'>This field is required</span>}
        

        
        <input {...register("phone", { required: true })} placeholder="your Phone"/>
        {errors.phone && <span className ='error'>This field is required</span>}
        
        <input type="submit" />
      </form>
    );
};

export default Shipment;