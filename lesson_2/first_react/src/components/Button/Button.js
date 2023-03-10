
import classes from "./Button.module.css"


const Button = ({children, handleShow}) => {
    return (
        <button onClick={() => handleShow()} className={classes.addButton}>
            {children}
        </button>
    )
}
export default Button
