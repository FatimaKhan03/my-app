import React, { useState } from "react";
import axios from "axios";
import { useHistory } from 'react-router-dom';
import { useForm } from "react-hook-form";

const Login = () => {
     let history= useHistory();
    
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = async (data) => {
        console.log(data);
        await axios.post("http://localhost:3003/users",data);
        history.push("/");
    }

    return (
        <div>
             <div>
             <div className="timeline-item" >
                    <h2>Login</h2>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} >

                <h4 > Enter Email :  </h4 >
                    <input {...register("emailRequired", { required: true, pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ })} />
                    {errors.emailRequired && <span className="validation">Enter valid email id.</span>} <br />

                    <h4 >  Enter Password :  </h4>
                    <input type="password" {...register("passwordRequired", { required: true })} />
                    {errors.passwordRequired && <span className="validation">Enter Password.</span>} <br /><br />

                    <input type="submit" />
                </form>
            </div>
        </div>)
}

export default Login;