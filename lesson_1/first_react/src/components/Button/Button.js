import classes from './Button.module.css';

const Button = ({title}) => {
    return (
        <div className={classes.btn}>
            <button className={classes.button}>{title}</button>
        </div>

    )
}
export default Button;