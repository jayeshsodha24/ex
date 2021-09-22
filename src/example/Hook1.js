import React,{useState} from 'react';
const Hook1=()=>
{
    const data=
    [
        {id:0,name:'jayesh',age:27},
        {id:1,name:'mahesh',age:28},
        {id:2,name:'naresh',age:29}
    ];
    const [myArray,setMydata]=useState(data);

    const removeElm=(id)=>{
        const myNewarry=myArray.filter((c_elm)=>{
            return c_elm.id!==id;
        })
        setMydata(myNewarry);
    };
    
    return (
        <div>
        {
            myArray.map((elm)=>{
                return <h1 key={elm.id}>Name:{elm.name} & Age:{elm.age}&nbsp;
                        <button onClick={()=>removeElm(elm.id)}>Remove</button>
                </h1>
                    
                })
        }
        </div>
    );
};
export default Hook1;
