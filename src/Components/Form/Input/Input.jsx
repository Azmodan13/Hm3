

export default function Input({innerText, onChange, name}){


    return(

        <label> <span> {innerText} </span> <input  onChange={onChange} name={name}  /></label>
    )
}