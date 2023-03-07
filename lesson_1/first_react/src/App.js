import './App.css';
// деструктризация --> import { Header, Text2 } from "./components/Header";
import Header from "./components/Header/Header";
import Button from "./components/Button/Button";
import Text from "./components/Text/Text";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";


////////////////////////////////////
// создаем компоненты
// const Text = () => {
//   return <h1 className='title'>Hello 21-03</h1> // возвращаем верстку
// }
// const Header = () => {
//     return (
//         <div>Header</div>
//     )
// }
// const Button = () => {
//     return <button className='button'>Click me!</button>
// }
//////////////////////////////////
function App() {
  return (
    <div className="App">
        <Header title={'Header Title'}/>
      <Text/>
        {/*<Text2/>*/}
        <Button title={'Click me!'}/>
        <Button title={'Follow!'}/>
        <Main title={'My profile is here ===> "LOOK!"'}/>
        <Footer title={'Footer'}/>





     {/*<header className="App-header">*/}
     {/*   <img src={logo} className="App-logo" alt="logo" />*/}
     {/*   <p>*/}
     {/*     Edit <code>src/App.js</code> and save to reload.*/}
     {/*   </p>*/}
     {/*   <a*/}
     {/*     className="App-link"*/}
     {/*     href="https://reactjs.org"*/}
     {/*     target="_blank"*/}
     {/*     rel="noopener noreferrer"*/}
     {/*   >*/}
     {/*     Learn React*/}
     {/*   </a>*/}
     {/* </header>*/}
    </div>
  );
}

export default App;
