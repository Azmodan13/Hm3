import './Controls.css'

function Controls({item, setData, data, setTrash, trash}) {

    const removeItem = () => {
        const remove = data.filter(el => el.id !== item.id)
        setData(remove)
        setTrash(++trash)
    }


    return(
        <div onClick={removeItem} className='Controls'>
        <span>x</span>
        </div>
    )
}

export default Controls