
import useCounter from "../../CustomHooks/useCounter";
import './Counter.css'
function Counter() {

    const {count, inputEl, minus , plus} = useCounter(5)


    return (
        <div className="caunter">
            <input type="text" placeholder="Ведите имя" ref={inputEl} />
            <div>{count}</div>
            <button onClick={plus}>+</button>
            <button onClick={minus}>-</button>

        </div>

    )
}


export default Counter
