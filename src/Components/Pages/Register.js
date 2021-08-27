import React from "react";
import axios from "axios";
import { useHistory } from 'react-router-dom';
import { useForm } from "react-hook-form";

const Register = () => {
    let history = useHistory();

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = async (data) => {
        console.log(data);
        await axios.post("http://localhost:3003/Register", data);
        history.push("/");
    }

    return (
        <div>
            <div>
                <div className="timeline-item" >
                    <h2>Register</h2>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <h4 >  Enter Name : </h4>
                    <input {...register("nameRequired", { required: true, pattern: /^[a-zA-Z ]*$/ })} />
                    {errors.nameRequired && <span className="validation">Enter valid Name</span>} <br />

                    <h4 >  Enter Email : </h4>
                    <input {...register("emailRequired", { required: true, pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ })} />
                    {errors.emailRequired && <span className="validation">Enter valid email id.</span>} <br />

                    <h4 >  Enter Contact Number : </h4>
                    <input {...register("contactRequired", { required: true })} />
                    {errors.contactRequired && <span className="validation">Enter valid contact Number</span>} <br />

                    <h4> Select Gender </h4>

                    <label htmlFor="Femaleid">
                        <input
                            {...register("Female")}
                            type="radio"
                            name="Female"
                            value="Female"
                            id="Femaleid"
                        />
                        Female
                    </label>
                    <label htmlFor="Maleid">
                        <input
                            {...register("Male")}
                            type="radio"
                            name="Male"
                            value="Male"
                            id="Maleid"
                        />
                        Male
                    </label>

                    <h4 > Enter Password : </h4>
                    <input type="password" {...register("passwordRequired", { required: true })} />
                    {errors.passwordRequired && <span className="validation">Enter Password.</span>} <br /><br />

                    <input type="submit" />
                </form>
            </div>
        </div>)
}

export default Register;