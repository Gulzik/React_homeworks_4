import classes from './Header.module.css';

// const headerTitle = 'Header Title'
const Header = (props) => {
    // const fc = (a, b) =>{
    //     return a+b
    // }
    // fc(2,4)
    return (
        <div className={classes.header}>
            <h2>{props.title}</h2>
        </div>

    )
}
export default Header;

//используется когда слишком много props
// const Header = (props) => {
//     const {title} = props;
//     return (
//         <div className={classes.header}>
//             <h2>{title}</h2>
//         </div>
//
//     )
// }
// export default Header;




















// export const Text2 = () => {
//     return (
//         <div>Title 2</div>
//     )
// }
// export const Header = () => {
//     return (
//         <div>Header</div>
//     )
// }