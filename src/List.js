/////////////////// function input ///////////////////

import React, { useState } from 'react'

function CreateNote() {
    const [data, setData] = useState({name:"",email:""});
    const changeHandel=(e)=>{
        console.log(e.target.name)
        setData((p)=>{
            return{...p,[e.target.name]:e.target.value}
        })

    };
    const handelSubmit=(e)=>{
        e.preventDefault()
        console.log(data)
    }



    return (
        <div>
            <from onsSubmit={handelSubmit}>
                <label>Name</label>  
                <input type='text' name='name' value={data.name} onChange={changeHandel} placeholder='Enter Name'></input>
                <br />
                <label>Email</label>
                <input type='text' name='email' value={data.email} onChange={changeHandel} placeholder='Enter Email'></input>
                <br />
                <button>Email</button>
            </from>
        </div>
    )
}

export default CreateNote