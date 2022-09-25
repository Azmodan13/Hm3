import './Character.css'
import Info from './Info/Info'
import Controls from './Controls/Controls'

function Character({item, setData, data,setTrash, trash}) {

    return(
        <div className="Character">
            <Controls item={item} setData={setData} data={data} trash={trash} setTrash={setTrash}/>
            <Info item={item}/>
        </div>
    )
}

export default Character 