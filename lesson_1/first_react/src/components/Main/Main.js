import classes from './Main.module.css';


const Main = (props) => {
    return (
        <div className={classes.main}>
            <p>{props.title}</p>
        </div>

    )
}
export default Main;