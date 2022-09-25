import Character from "../Character/Character"
import './Wrapper.css'
import { useState} from "react"
export default function Wrapper({setData, data, trash, setTrash}) {

    const [transform, setTransform] = useState(2)


    const right = () => {
        const max = -382 * (data.length - 3) + 2;
        if(transform > max)
        setTransform(transform - 382)
    }
    const left = () => {
        if(transform < 1)
        setTransform(transform + 382)
    }


    return(
        <div className="wrapper">
            <div className="slider__wrapper" style={{transform: `translateX(${transform}px)`}}>
                {data ? data.map((item)=> 
    <Character key={item.id} item={item} setData={setData} data={data} trash={trash} setTrash={setTrash}/>    
    ) : null}

            </div>
            <button onClick={right} className="right">right</button>
            <button onClick={left} className="left">left</button>

        </div>
    )
}