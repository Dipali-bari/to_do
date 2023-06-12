

function Todoitem({todoitem , deleteitem ,togale}){


    return (
        <div>
            {

            todoitem.map((item , index) =>{
                return (
                    <div style={{ display:"flex" , justifyContent:"center" ,alignItems:"center"}}>
                    <h4>{item.title}</h4>&nbsp; &nbsp;
                    <h5 style={{color:"red"}}>{item.status?"completed":"Not Completed"}</h5>&nbsp;&nbsp;
                    <button onClick={()=>{togale(index)}}>Toggle</button>&nbsp; &nbsp;
                    <button onClick={()=>{deleteitem(index)}}>Delete</button>&nbsp; &nbsp;
                </div>
                );
                
                
            })
        }
        </div>
    );
}
export default Todoitem;