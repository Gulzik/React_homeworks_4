import { useState } from "react";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import classes from "./TodoList.module.css"
import Modal from "../../components/Modal/Modal";
import List from "../../components/List/List";

// let isShow = true;

const TodoList = () => {
    const [isShow, setIsShow] = useState(true)
    const [newTask, setNewTask] = useState('Пусто');

    const [statistics, setStatistics] =useState('Пусто')

    // console.log(isShow, 'state')
    const handleShow = () => {
        setIsShow(!isShow)
    };
    const handleChangeText = (text) =>{
        setNewTask(text)
        console.log(newTask, 'new text')
    }
    const dailyStatistics = (text) => {
        setStatistics(text)
    }
    return (
        <div className={classes.wrapper}>
            <Button handleShow={handleShow}>
                Добавить
            </Button>
            <Input/>
            <List />

            { isShow &&  <Modal handleshow={handleShow}>
                <p>{newTask}</p>
                <input type="text" onChange={(event) => handleChangeText(event.target.value)} />
                <Button>
                    Добавить
                </Button>
                <p>{statistics}</p>
                <input type="text" onChange={(event) => dailyStatistics(event.target.value)} />
                    <Button>
                        Search
                    </Button>
                <button onClick={handleShow}>Close</button>

            </Modal>}

        </div>
    )
}

export default TodoList