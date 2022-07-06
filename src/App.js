import AddItem from "./Components/AddItem";
import SearchItem from "./Components/SearchItem";
import TodoList from "./Components/TodoList";
import {Routes, Route, Link} from 'react-router-dom'
import { useState } from "react";
import {ImCross,ImPlus} from 'react-icons/im'


function App() {

  // component change
  const [addCom,setSearch] = useState(false)
  // button change
  const [plus,setPlus] = useState(false)

  return (
    <>
        <div className="container">
            <div className="mobile_size">
              <div className="header">
                <h4>To Do List</h4>
              </div>
                {!addCom? <SearchItem/> : <AddItem/> }
                <TodoList />
                <Routes>
                    <Route path="/Search" element={<SearchItem/>}/>
                    <Route path="/Search" element={<AddItem/>}/>
                </Routes>

          <div className="footer">
              <button>{!plus? <ImPlus
                      onClick={()=>{
                        setSearch(true)
                        setPlus(true)
                      }}
                      />: <ImCross
                      onClick={()=>{
                        setSearch(false)
                        setPlus(false)
                        }}/>
                      }
              </button>
          </div>
            </div>
        </div>
    </>
  );
}

export default App;
