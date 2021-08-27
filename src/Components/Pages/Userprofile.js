import React, { useEffect, useState } from "react";
import axios from "axios";

const Userprofile = () => {
    const [Userdetail, setUserdetail] = useState({});
    const [isLoading, setIsLoading] = useState(true)
    var result = {};
    
    const loadUser = async () => {
        result = await axios.get("https://raw.githubusercontent.com/bhanushalimahesh3/mock-api/main/user-profile.json");
        setUserdetail(result.data);
        console.log(Userdetail)
        setIsLoading(false)
    };

    useEffect(() => {
        loadUser();
    }, [])

    return (
        <div style={{ maxWidth: '100%' }}>
            {!isLoading && <div>
                <div className="timeline-item" >
                    <h2>User Profile</h2>
                </div>
                <div className="about">
                    <h4 >Name : {Userdetail.name}</h4> 
                    <h4 >Email : {Userdetail.email}</h4> 
                    <h4 >Contact Number : {Userdetail.contact_number}</h4>
                    <h4 >Gender : {Userdetail.gender}</h4>
                </div>
            </div>}
        </div>
    )



}

export default Userprofile;