import {useState} from 'react'
import './App.css';
// import Character from './Components/Character/Character';
import Data from './Data/Data';
import Basket from './Components/Basket/Basket';
import Counter from './Components/Counter/Counter';
import Wrapper from './Components/Wrapper/Wrapper';

function App() {

  const [data, setData] = useState()
  const [trash, setTrash] = useState(0)


  return (
    <>  

    <Counter/>
    <Data setData={setData}/>

    <Wrapper setData={setData} data={data} trash={trash} setTrash={setTrash}>
      
    {/* {data ? data.map((item)=> 
    <Character key={item.id} item={item} setData={setData} data={data} trash={trash} setTrash={setTrash}/>    
    ) : null} */}

    </Wrapper>

    <Basket trash={trash}/>
    </>
  );
}

export default App;
