import { useState, useEffect,useRef } from "react"

export default function useCounter(n =  0) {
    const [count, setCount] = useState(n)

    const inputEl = useRef(null)

    useEffect(() => {
        if(count <= 0 ){
            alert('Tак робити не можна')
            setCount(0)
        }
        if(count >= 10 ){

            setCount(10)
            inputEl.current.focus()
        }

    }, [count]);


    return {
        count,
        plus: () => setCount(count + 1),
        minus: () => setCount(count - 1),
        inputEl
    }
}