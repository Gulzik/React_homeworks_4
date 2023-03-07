import classes from "./List.module.css";

////////Домашнее задание/////////////
const List = (props) => {
    const action = [
        {
            id:1 ,
            task: 'coding'
        },
        {
            id:2,
            task: 'eat'
        },
        {
            id:3,
            task: 'sleep'
        }
    ]
    return (
        <div className={classes.newList}>
            <div>
                <ul>
                    {action.map((item,id) => <li key={props.id}>
                        {item.task}
                    </li>)}
                </ul>


                {/*{action.map((el,id) => <li key={el.id}>*/}
                {/*{el.task}*/}
                {/*</li>)}*/}
            </div>
        </div>

    )

}
export default List