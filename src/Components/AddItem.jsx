import { useEffect } from 'react';
import { useRef } from 'react';
import { createContext } from 'react';
import { useState } from 'react';
import {MdDone} from 'react-icons/md'
import TodoList from './TodoList';


const AddItem = () =>{


    const item = useRef(null);
    // const [item,setItem] = useState("");
    const [list, setList] = useState([])

    const demo = [
        {id:1, name: "pick call", checked: false},
        {id:2, name: "recivie call", checked: true}
    ]


    // const {itmeName, isDone} = list;
    const handleSubmit = (e) =>{
        e.preventDefault(); 
        if(!item.current.value){
            alert('Enter Text')
        }else{
            console.log(item.current.value)
            const newTodo = {id: Date.now(), name: item.current.value, isDone: false}
            console.log([...demo,list])
            setList([...list,newTodo])
            item.current.value = "";
        }
    }

    const removeItem = (id) =>{
        let newList = list.filter((value) => value.id !== id);
        setList(newList);
    }

    const changeCheck = (id) =>{
        let check = list.map((value) => {
            if(value.id === id){
                    return {...value,isDone: !value.isDone}
                }
                return value
            })
            setList(check)
    }

    
    return(
        <>
            <div className="input_field">
                <form action="" onClick={handleSubmit}>
                    <input type="text" onClick={(e) => e.stopPropagation()} placeholder="Add Items" ref={item}/>
                    <button>
                        <MdDone style={{color: '#0fc'}}/>
                    </button>
                </form>
            </div>

            {list.length>0 ? <TodoList list={list} removeItem={removeItem} changeCheck={changeCheck}/>: <h4 style={{textAlign: 'center',color:'white'}}> No Item</h4>}
        </>
    )
}
export default AddItem;