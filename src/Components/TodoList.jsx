import {MdDelete} from 'react-icons/md'

const TodoList = ({list,removeItem,changeCheck}) =>{
    console.log(list)
    return(
        <>
        {
            list.map((value) =>{
                return(
                    <div className="todo_items" key={value.id}>
                        <div style={{display: 'flex'}}>
                            <input type="checkbox" onClick={() => changeCheck(value.id)} checked={value.isDone}/>
                            <p style={value.isDone?{textDecoration:'line-through'}: {textDecoration: 'none'}}> {value.name}</p>
                        </div>
                        <button onClick={() => removeItem(value.id)}><MdDelete style={{color: "#0fc",fontSize: '18px'}}/></button>
                    </div>
                )
            })
        }
        </>
    )
}
export default TodoList;