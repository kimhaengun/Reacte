import "../App.css";
import React from 'react';
import { useDispatch } from "react-redux";
import { decrease, increase } from "../store";

const Bottom = () => {
    const dispatcher = useDispatch();
    return (
        <div className='sub_container'> 
            <h1>bottom</h1>
            <button onClick={()=>dispatcher(increase("cos"))}>+</button>
            <button onClick={()=>dispatcher(decrease())}>-</button>
        </div>
    );
};

export default Bottom;