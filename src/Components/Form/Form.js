import './Form.css'
import Input from './Input/Input'
import useLogInput from '../../CustomHooks/useLogInput'
import React, {useRef} from 'react'


export default function Form(){

    const aboutMe = useLogInput()
    const name = aboutMe.state

    const address = useLogInput()
    const last = address.state
    


    const ageInputRef = useRef(null)

    
    const onSubmit = (event) => {
        event.preventDefault();

        const data = {
            name,
            last,
            age : ageInputRef.current.value,
        };
        console.log(data)
    }



    return(
        <form onSubmit={onSubmit} action="">
            <fieldset>
            <Input  innerText='about me' onChange={aboutMe.fuName} name='name'  />
            <div></div>
            <Input  innerText='address' onChange={address.fuName} name='name'  />

            <label> <span>Age</span> <input ref={ageInputRef} name='age' type="number"/></label>
            <div>
            <button type='Submit'>Submit</button>
            <button type='reset' >clear</button>
            </div>
            </fieldset>
        </form>
    )
}