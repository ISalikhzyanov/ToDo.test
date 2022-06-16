import './App.css';
import {useState} from "react";
import TodoForm from "./components/TodoForm";

import TodoList from "./components/TodoList";
import DoneToDo from "./components/DoneToDo";

function App() {
    // const [checked, setChecked] = useState(false)
    const [dis, setDis] = useState(false)
    const [done, setDone] = useState([])
    const [toDoes, setToDoes] = useState([
        {active: false, id: 1, body: 'Тестовое задание'}
    ]);

    const handleChange=(toDo)=>{
        (toDoes.find(t=> t.active === toDo.active))
    }

    const createToDo = (newToDo) => {
        setToDoes([...toDoes, newToDo])
    }
    const removeToDo = (toDo) => {
        setToDoes(toDoes.filter(t => t.id !== toDo.id));

    }
    const removeDone = (toDo) => {
        setDone(done.filter(t => t.id !== toDo.id));

    }

    const addNew = (toDo) => {
        setDone([...done, toDoes.find(t => t.id === toDo.id)])
    }
    const handleDis = () => {
        setDis(!dis)
    }

    const clearAll = () => {
        setToDoes([]);
        setDone([])
    }
    console.log(done)
    // console.log(toDoes)
    return (
        <div className="App">
            <TodoForm create={createToDo}/>
            <div className="btns">
                <button className="show-all" disabled={!dis} onClick={handleDis}>Показать все</button>
                <button className="show-done" disabled={dis} onClick={handleDis}>Показать выполненные</button>
            </div>
            {dis
                ?  <DoneToDo done={done} />
                : <TodoList remove={removeToDo} add={addNew} toDoes={toDoes}  removeDone={removeDone}/>
            }
            <button className="delete" onClick={clearAll}>Delete All</button>
        </div>
    );
}

export default App;
