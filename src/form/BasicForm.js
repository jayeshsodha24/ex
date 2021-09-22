import React,{useState} from 'react'

const BasicForm = () => 
{
    const [e_id,setid]=useState(0);
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");

    const [AllEntery,setallEntry]=useState([]);

    const onSubmitForm=(e)=>
    {
        e.preventDefault();
        setid(e_id+1);
        const newEntry={e_id:e_id,email:email,password:password};

        setallEntry([...AllEntery,newEntry]);   
       
    };
    const remove=(id)=>{
        const myNewarry=AllEntery.filter((c_elm)=>{
            return c_elm.e_id!==id;
        })
       
        setallEntry(myNewarry);

    };
    return (
        <>     
        <form action="" onSubmit={onSubmitForm}>
                <div>
                    <label name="Email">Email </label>
                    <input type="text" name="email" id="Email" autoComplete="off" onChange={(e)=>setEmail(e.target.value)}/>
                </div>
                <div>
                    <label name="password">Password </label>
                    <input type="password" name="password" id="password" autoComplete="off" onChange={(e)=>setPassword(e.target.value)}/>
                </div>
                <button type="submit">Submit</button>
            </form>
           
            <div>
                {
                   AllEntery.map((c_elm)=>{
                       return (
                           <div>
                               <p>Id:{c_elm.e_id},Address: {c_elm.email},Password:{c_elm.password}
                               <button onClick={()=>remove(c_elm.e_id)}>Remove</button></p>
                           </div>
                       )
                   })
                }
            </div>
        
        </>
    );
};
export default BasicForm;
        