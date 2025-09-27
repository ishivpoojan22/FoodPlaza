import { useState } from "react";
import About from "./About";

const User = (props)=>{

    const {name,age} = props;

    const[count,setCount] = useState(0);

    // const changeHandler = ()=>{setCount(count+1)};

    function changeHandler () {
        setCount(count+1)

    }
    return (
        <div className="user-name">
            <h1>count:{count}</h1>
            <button onClick={changeHandler}>count increse</button>
            <div>Name: {name}</div>
            <div>Location: India</div>
            <div>Age: {age}</div>
        </div>
    )
}
export default User;