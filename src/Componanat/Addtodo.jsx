import Todoitem from "./Additem";
import { useState } from "react";

function Addtodo(){
    const [state , setState] = useState("");
    const [todolist , settodolist] = useState([]);
    console.log(state);

    function addItem()
    {
        //In react never update array or object , we should replace an array or object
        let obj = {
            title:state,
            status:false

        }
        settodolist([...todolist ,obj]);
    }

    function deleteitem(index){
        var filterdata = todolist.filter((item ,i)=>{
            return index!=i;

        });

        settodolist(filterdata);

    }

    function togale(index){
        console.log("Togale hander");

        const togaleHandler= todolist.map((item , i)=>{
                return index=== i ? {...item,status:!item.status} : item;

        });

        settodolist(togaleHandler);

    }

    return (
        <div>
            <h3>Add TO Do App</h3>
            <h2>Completed</h2>
            <input type = "text" placeholder="Enter the text here" value={state} onChange={(e)=>{setState(e.target.value)}} />&nbsp; &nbsp; &nbsp; &nbsp; 
            <button onClick={addItem}>Add Item </button>
            <Todoitem todoitem={todolist} deleteitem = {deleteitem}  togale={togale}/>
        </div>
    );
}
export default Addtodo;