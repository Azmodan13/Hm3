import {useState} from 'react'
import './App.css';
// import Character from './Components/Character/Character';
import Data from './Data/Data';
import NewsData from './Data/NewsData';
import Basket from './Components/Basket/Basket';
import Counter from './Components/Counter/Counter';
import Wrapper from './Components/Wrapper/Wrapper';
import Form from './Components/Form/Form';
import News from './Components/News/News';

function App() {

  const [data, setData] = useState()
  const [news, setNews] = useState()

  const [trash, setTrash] = useState(0)


  return (
    <>  

    <Counter/>
    <NewsData setNews={setNews} />
    <Data setData={setData}/>
    <News news={news}/>
    <Form/>
    <Wrapper setData={setData} data={data} trash={trash} setTrash={setTrash}></Wrapper>

    <Basket trash={trash}/>
    </>
  );
}

export default App;
