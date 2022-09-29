import {useState} from 'react'
import './App.css';
// import Character from './Components/Character/Character';
import Data from './Data/Data';
import Basket from './Components/Basket/Basket';
import Counter from './Components/Counter/Counter';
import Wrapper from './Components/Wrapper/Wrapper';
import Form from './Components/Form/Form';

function App() {

  const [data, setData] = useState()
  const [trash, setTrash] = useState(0)


  return (
    <>  

    <Counter/>
    <Data setData={setData}/>
    <Form/>
    <Wrapper setData={setData} data={data} trash={trash} setTrash={setTrash}></Wrapper>

    <Basket trash={trash}/>
    </>
  );
}

export default App;
