import { useState } from "react"



export default function useLogInput() {

    const [state, setState] = useState('')

    function fuName(even){
        const value = even.target.value;
        setState(value)
    }

        return{
            fuName,
            state,}
        

}