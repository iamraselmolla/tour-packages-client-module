import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../UserContext/AuthProvicer';

const Myservices = () => {
    const [allPackages, setPackages] = useState([]);
    const {user, logOut} = useContext(AuthContext)

    useEffect(() => {
        fetch(`http://localhost:5000/added-services?email=${user?.email}`)
        .then(res=>res.json())
        .then(data => {
            
            return setPackages(data)
        })
        .catch(err => console.log(err.message))
    },[allPackages])
    return (
        <div>
        </div>
    );
};

export default Myservices;