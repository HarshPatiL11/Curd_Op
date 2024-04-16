import React, { useState } from 'react';
import axios from 'axios';

const UpdatingApi = () => {
    const data = { fname: "", lname: "", email: "", pnumber: "" };
    const [userdata, setUserData] = useState(data);
    const [userType, setUserType] = useState("newUser"); 
    const [formHeader, setFormHeader] = useState("New User Form"); 

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'userType') {
            setUserType(value);
            setFormHeader(value === 'newUser' ? 'New User Form' : 'Update User Form');
        } else {
            setUserData({ ...userdata, [name]: value });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('https://jsonplaceholder.typicode.com/users', userdata)
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    };

    return (
        <div>
            <h1>Update DataBase</h1>
            <div className='formDisplay'>
                <input type='radio'name='userType' value='newUser'checked={userType === 'newUser'} onChange={handleChange}/>New User
                <input type='radio' name='userType' value='updateuser' checked={userType === 'updateuser'} onChange={handleChange}/>Update
                <h2 id="Formheader">{formHeader}</h2>
                {(userType === 'newUser' || userType === 'updateuser') && (
                    <>
                        <label>Name</label><br/>
                        <input name='fname' type='text' value={userdata.fname} onChange={handleChange}/><br/>
                        <label>Surname</label><br/>
                        <input name='lname' type='text' value={userdata.lname} onChange={handleChange}/><br/>
                        <label>Enter Email</label><br/>
                        <input name='email' type='email' value={userdata.email} onChange={handleChange}/><br/>
                        <label>Enter Phone number</label><br/>
                        <input name='pnumber' type='number' value={userdata.pnumber} onChange={handleChange}/><br/><br/>
                        <button onClick={handleSubmit}>Submit button</button>
                    </>
                )}
            </div>
        </div>
    );
};

export default UpdatingApi;
